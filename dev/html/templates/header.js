module.exports = function(args) {
    let siteName = args[0];
    let activeItem = args[1];

    function createNavList(arr) {
        return arr.map(item => {
            if(activeItem === item) {
                return `<li class="active"><a href="${item.toLowerCase()}.html">${item}</a></li>`;
            } else {
                return `<li><a href="${item.toLowerCase()}.html">${item}</a></li>`;
            }
        }).join("\n");
    }

    return `
		<header class="header" id="header">
			<strong class="main-logo">
				<a href="home.html">
					<img src="images/webpack-logo.png" alt="${siteName}" />
				</a>
			</strong>
			<nav>
				<ul class="main-nav">
					${createNavList(["Home","About","Contact"])}
				</ul>
			</nav>
		</header>
	`;
};