const heroSkyline = new Proxy({"src":"/_astro/new-york-city-skyline.Jy4H7TUF.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/home/new-york-city-skyline.webp";
							}
							
							return target[name];
						}
					});

export { heroSkyline as h };
