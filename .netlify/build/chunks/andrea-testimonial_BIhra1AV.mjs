const julioTestimonial = new Proxy({"src":"/_astro/julio-testimonial.DQbyzGrw.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/julio-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const hugobTestimonial = new Proxy({"src":"/_astro/hugob-testimonial.CRC7XPw-.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/hugob-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const andresTestimonial = new Proxy({"src":"/_astro/andres-testimonial.DA2Z7EQg.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/andres-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const andreaTestimonial = new Proxy({"src":"/_astro/andrea-testimonial.BVaSyUiJ.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/andrea-testimonial.jpg";
							}
							
							return target[name];
						}
					});

export { andresTestimonial as a, andreaTestimonial as b, hugobTestimonial as h, julioTestimonial as j };
