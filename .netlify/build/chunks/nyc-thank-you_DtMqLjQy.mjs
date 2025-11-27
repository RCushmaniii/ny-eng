const nycImage = new Proxy({"src":"/_astro/nyc-thank-you.XvGQo4Dx.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/nyc-thank-you.jpg";
							}
							
							return target[name];
						}
					});

export { nycImage as n };
