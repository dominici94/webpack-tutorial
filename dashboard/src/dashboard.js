const url = window.location.pathname;
console.log(url);

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/kiwi-page") {
  import("KiwiApp/KiwiPage").then((KiwiPageModule) => {
    const KiwiPage = KiwiPageModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  });
}

console.log("dashboard");
