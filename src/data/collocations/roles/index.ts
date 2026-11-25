// Registry of the job-role collocation banks.
// Each role has its own reference page; all of them share the one drill page.

import type { L, RoleGroup } from "./types";
import { groups as logistics } from "./logistics";
import { groups as finance } from "./finance";
import { groups as itManagers } from "./it-managers";
import { groups as softwareDevelopers } from "./software-developers";
import { groups as doctors } from "./doctors";
import { groups as surgeons } from "./surgeons";
import { groups as salonOwners } from "./salon-owners";
import { groups as constructionSuperintendents } from "./construction-superintendents";

export type RoleId =
  | "logistics"
  | "finance"
  | "it-managers"
  | "software-developers"
  | "doctors"
  | "surgeons"
  | "salon-owners"
  | "construction-superintendents";

export type RoleIcon =
  | "Truck"
  | "Landmark"
  | "Server"
  | "Code"
  | "Stethoscope"
  | "Activity"
  | "Scissors"
  | "HardHat";

export interface Role {
  /** Also the English URL leaf and the prefix of the progress ids. */
  id: RoleId;
  slugEs: string;
  icon: RoleIcon;
  /** Short label for cards and the drill's bank selector. */
  name: L;
  /** <title>, 60 characters or fewer. */
  title: L;
  /** Who it is for, as it reads after "for" / "para". */
  audience: L;
  /** Three example collocations for the meta description. */
  examples: string;
  /** The situations covered, for the hero paragraph. */
  scenes: L;
  groups: RoleGroup[];
}

export const roles: Role[] = [
  {
    id: "logistics",
    slugEs: "logistica",
    icon: "Truck",
    name: ["Logistics & Supply Chain", "Logística y Cadena de Suministro"],
    title: [
      "English Collocations for Logistics and Supply Chain",
      "Colocaciones en Inglés para Logística y Suministro",
    ],
    audience: ["logistics and supply chain professionals", "profesionales de logística"],
    examples: "ship to, clear customs, run out of",
    scenes: [
      "shipping and receiving, customs, inventory, delays and carrier negotiations",
      "embarques y recepción, aduanas, inventario, retrasos y negociación con transportistas",
    ],
    groups: logistics,
  },
  {
    id: "finance",
    slugEs: "finanzas",
    icon: "Landmark",
    name: ["Finance & Accounting", "Finanzas y Contabilidad"],
    title: [
      "English Collocations for Finance and Accounting",
      "Colocaciones en Inglés para Finanzas y Contabilidad",
    ],
    audience: ["finance and accounting professionals", "profesionales de finanzas y contabilidad"],
    examples: "account for, invest in, write off",
    scenes: [
      "the monthly close, budgets and forecasts, payments, audits and explaining a variance",
      "el cierre mensual, presupuestos y pronósticos, pagos, auditorías y cómo explicar una variación",
    ],
    groups: finance,
  },
  {
    id: "it-managers",
    slugEs: "gerencia-de-ti",
    icon: "Server",
    name: ["IT Managers", "Gerencia de TI"],
    title: [
      "English Collocations for IT Managers: Verb + Preposition",
      "Colocaciones en Inglés para la Gerencia de TI",
    ],
    audience: ["IT managers", "quienes dirigen equipos de TI"],
    examples: "escalate to, comply with, sign off on",
    scenes: [
      "incidents and outages, roadmaps and deadlines, vendors, security and stakeholder updates",
      "incidentes y caídas, planes y fechas de entrega, proveedores, seguridad y reportes a los interesados",
    ],
    groups: itManagers,
  },
  {
    id: "software-developers",
    slugEs: "desarrollo-de-software",
    icon: "Code",
    name: ["Software Developers", "Desarrollo de Software"],
    title: [
      "English Collocations for Software Developers",
      "Colocaciones en Inglés para Desarrollo de Software",
    ],
    audience: [
      "software developers, front end to back end",
      "quienes desarrollan software, de front end a back end",
    ],
    examples: "deploy to, merge into, roll back",
    scenes: [
      "code reviews, branches and deploys, debugging, the stack and the daily stand-up",
      "revisiones de código, ramas y despliegues, depuración, el stack y la reunión diaria",
    ],
    groups: softwareDevelopers,
  },
  {
    id: "doctors",
    slugEs: "medicina",
    icon: "Stethoscope",
    name: ["Doctors", "Medicina"],
    title: [
      "English Collocations for Doctors: Verb + Preposition",
      "Colocaciones en Inglés para Medicina: Verbo + Preposición",
    ],
    audience: ["doctors", "médicas y médicos"],
    examples: "diagnose with, allergic to, recover from",
    scenes: [
      "consultations, diagnosis, treatment, referrals and talking with patients and colleagues",
      "consultas, diagnóstico, tratamiento, referencias y la conversación con pacientes y colegas",
    ],
    groups: doctors,
  },
  {
    id: "surgeons",
    slugEs: "cirugia",
    icon: "Activity",
    name: ["Surgeons", "Cirugía"],
    title: [
      "English Collocations for Surgeons: Verb + Preposition",
      "Colocaciones en Inglés para Cirugía: Verbo + Preposición",
    ],
    audience: ["surgeons", "cirujanas y cirujanos"],
    examples: "operate on, consent to, discharge from",
    scenes: [
      "pre-op, the operating room, recovery, complications and the surgical team",
      "el preoperatorio, el quirófano, la recuperación, las complicaciones y el equipo quirúrgico",
    ],
    groups: surgeons,
  },
  {
    id: "salon-owners",
    slugEs: "salon-de-belleza",
    icon: "Scissors",
    name: ["Salon Owners", "Salones de Belleza"],
    title: [
      "English Collocations for Salon Owners: Verb + Preposition",
      "Colocaciones en Inglés para Salones de Belleza",
    ],
    audience: ["salon owners", "quienes dirigen un salón de belleza"],
    examples: "book an appointment for, specialize in, charge for",
    scenes: [
      "clients and appointments, services, staff, products and running the business",
      "clientes y citas, servicios, personal, productos y la operación del negocio",
    ],
    groups: salonOwners,
  },
  {
    id: "construction-superintendents",
    slugEs: "superintendencia-de-obra",
    icon: "HardHat",
    name: ["Construction Superintendents", "Superintendencia de Obra"],
    title: [
      "English Collocations for Construction Superintendents",
      "Colocaciones en Inglés para Superintendentes de Obra",
    ],
    audience: [
      "construction superintendents and site managers",
      "superintendentes y residentes de obra",
    ],
    examples: "report to, sign off on, hand over",
    scenes: [
      "the schedule, subcontractors, inspections, updates to leadership and the final walkthrough with the homeowner",
      "el programa de obra, subcontratistas, inspecciones, reportes a la dirección y el recorrido final con el cliente",
    ],
    groups: constructionSuperintendents,
  },
];

export const roleById = (id: string | null | undefined) => roles.find((r) => r.id === id);
