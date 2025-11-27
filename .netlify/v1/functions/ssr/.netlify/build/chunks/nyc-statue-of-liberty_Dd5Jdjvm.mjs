const bookingHero = new Proxy({"src":"/_astro/nyc-statue-of-liberty.BhHEyhDk.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/contact/nyc-statue-of-liberty.jpg";
							}
							
							return target[name];
						}
					});

export { bookingHero as b };
