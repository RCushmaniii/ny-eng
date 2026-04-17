import { upload } from "@vercel/blob/client";
import { useState, useRef } from "react";
import { CheckCircle, Mic, Upload, AlertCircle, Loader2 } from "lucide-react";

interface Props {
  lang: "en" | "es";
}

const t = {
  en: {
    heading: "Submit Your Recording",
    nameLabel: "Your name",
    namePlaceholder: "María García",
    emailLabel: "Your email",
    emailPlaceholder: "maria@empresa.com",
    fileLabel: "Your recording",
    fileHint:
      "MP3, M4A, WAV, or OGG · Max 25 MB · A 90-second recording is typically under 5 MB",
    fileCta: "Choose audio file",
    fileSelected: "File selected",
    submitCta: "Send to Robert",
    uploading: "Uploading…",
    successHeading: "Recording received.",
    successBody: (name: string, email: string) =>
      `Thank you, ${name}. Robert will listen to your presentation and send personal feedback to ${email} within 48 hours.`,
    successNote: "Check your spam folder if you don't see a reply.",
    errorGeneric:
      "Something went wrong with the upload. Please try again or email robert@nyenglishteacher.com directly.",
    errorFileType:
      "Please select an audio file (MP3, M4A, WAV, or OGG).",
    errorFileSize: "File is too large. Please keep recordings under 50 MB.",
    required: "Required",
  },
  es: {
    heading: "Envía Tu Grabación",
    nameLabel: "Tu nombre",
    namePlaceholder: "María García",
    emailLabel: "Tu correo electrónico",
    emailPlaceholder: "maria@empresa.com",
    fileLabel: "Tu grabación",
    fileHint:
      "MP3, M4A, WAV u OGG · Máx 25 MB · Una grabación de 90 segundos suele pesar menos de 5 MB",
    fileCta: "Elegir archivo de audio",
    fileSelected: "Archivo seleccionado",
    submitCta: "Enviar a Robert",
    uploading: "Subiendo…",
    successHeading: "Grabación recibida.",
    successBody: (name: string, email: string) =>
      `Gracias, ${name}. Robert escuchará tu presentación y enviará retroalimentación personal a ${email} en un plazo de 48 horas.`,
    successNote: "Revisa tu carpeta de spam si no ves la respuesta.",
    errorGeneric:
      "Algo salió mal con la subida. Por favor intenta de nuevo o escribe directamente a robert@nyenglishteacher.com.",
    errorFileType:
      "Por favor selecciona un archivo de audio (MP3, M4A, WAV u OGG).",
    errorFileSize:
      "El archivo es demasiado grande. Por favor mantén las grabaciones bajo 50 MB.",
    required: "Requerido",
  },
};

const ALLOWED_TYPES = [
  "audio/mpeg",
  "audio/mp4",
  "audio/x-m4a",
  "audio/wav",
  "audio/ogg",
  "audio/webm",
  "audio/aac",
];

const MAX_BYTES = 25 * 1024 * 1024;

export default function CapstoneUploadForm({ lang }: Props) {
  const copy = t[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setErrorMsg("");

    if (!selected) {
      setFile(null);
      return;
    }

    if (!ALLOWED_TYPES.includes(selected.type) && !selected.name.match(/\.(mp3|m4a|wav|ogg|aac|webm)$/i)) {
      setErrorMsg(copy.errorFileType);
      setFile(null);
      return;
    }

    if (selected.size > MAX_BYTES) {
      setErrorMsg(copy.errorFileSize);
      setFile(null);
      return;
    }

    setFile(selected);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !name.trim() || !email.trim()) return;

    setStatus("uploading");
    setProgress(0);
    setErrorMsg("");

    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

      await upload(`capstone/${Date.now()}-${safeName}`, file, {
        access: "private",
        handleUploadUrl: "/api/capstone/blob-upload",
        clientPayload: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          lang,
        }),
        onUploadProgress: ({ percentage }) => {
          setProgress(Math.round(percentage));
        },
      });

      setStatus("success");
    } catch (err) {
      console.error("Capstone upload error:", err);
      setStatus("error");
      setErrorMsg(copy.errorGeneric);
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{copy.successHeading}</h3>
        <p className="text-slate-600 leading-relaxed mb-3">
          {copy.successBody(name, email)}
        </p>
        <p className="text-sm text-slate-400">{copy.successNote}</p>
      </div>
    );
  }

  // ── Upload form ───────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {copy.nameLabel} <span className="text-amber-500">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={copy.namePlaceholder}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {copy.emailLabel} <span className="text-amber-500">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={copy.emailPlaceholder}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
        />
      </div>

      {/* File picker */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {copy.fileLabel} <span className="text-amber-500">*</span>
        </label>

        <div
          onClick={() => fileInputRef.current?.click()}
          className={`relative cursor-pointer border-2 border-dashed rounded-xl p-6 transition-colors text-center ${
            file
              ? "border-amber-400 bg-amber-50"
              : "border-slate-300 hover:border-amber-300 hover:bg-slate-50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*,.mp3,.m4a,.wav,.ogg,.aac"
            onChange={handleFileChange}
            className="sr-only"
          />
          {file ? (
            <div className="flex items-center justify-center gap-3">
              <Mic className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800">{copy.fileSelected}</p>
                <p className="text-xs text-slate-500 truncate max-w-xs">{file.name}</p>
                <p className="text-xs text-slate-400">
                  {(file.size / (1024 * 1024)).toFixed(1)} MB
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-6 h-6 text-slate-400" />
              <span className="text-sm font-medium text-amber-600">{copy.fileCta}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{copy.fileHint}</p>

        {errorMsg && (
          <div className="flex items-start gap-2 mt-3 text-red-600">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-sm">{errorMsg}</p>
          </div>
        )}
      </div>

      {/* Uploading indicator */}
      {status === "uploading" && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
            <span>{copy.uploading} {progress > 0 ? `${progress}%` : ""}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Error state */}
      {status === "error" && errorMsg && (
        <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "uploading" || !file || !name.trim() || !email.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl transition-colors"
      >
        {status === "uploading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {copy.uploading}
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            {copy.submitCta}
          </>
        )}
      </button>
    </form>
  );
}
