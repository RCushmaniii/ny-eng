const hugolTestimonial = new Proxy({"src":"/_astro/hugo-l-testimonial.DbAi-EVl.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/hugo-l-testimonial.jpg";
							}
							
							return target[name];
						}
					});

const karlaTestimonial = new Proxy({"src":"/_astro/karla-testimonial.CpsD-XKV.jpg","width":313,"height":313,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/testimonials/karla-testimonial.jpg";
							}
							
							return target[name];
						}
					});

export { hugolTestimonial as h, karlaTestimonial as k };
