const emmanuelTestimonial = new Proxy({"src":"/_astro/emmanuel-testimonial.6K_fBnAF.jpg","width":641,"height":641,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/emmanuel-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const erikaTestimonial = new Proxy({"src":"/_astro/erika-testimonial.wpvoeR51.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/erika-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const albertoTestimonial = new Proxy({"src":"/_astro/alberto-testimonial.B1nllZpn.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/alberto-testimonial.jpg";
							}
							
							return target[name];
						}
					});

export { emmanuelTestimonial as a, albertoTestimonial as b, erikaTestimonial as e };
