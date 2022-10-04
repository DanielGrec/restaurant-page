(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h1");t.classList.add("home-heading"),t.textContent="Welcome";const n=document.createElement("img");n.classList.add("home-logo"),n.src="./images/burger.png",n.alt="Burger Logo";const a=document.createElement("h2");a.classList.add("home-title"),a.textContent="The best burger in town";const c=document.createElement("p");c.classList.add("home-para"),c.textContent="We're a small burger factory focusing on making the best burgers for our happy customers.";const d=document.createElement("p");return d.classList.add("home-contact"),d.textContent="Head over to our contact page to place your order!",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(c),e.appendChild(d),e}())};function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const c=document.createElement("p");c.textContent=t;const d=document.createElement("img");return d.src=`./images/burgers/${e.toLowerCase()}.png`,d.alt=`${e}`,n.appendChild(d),n.appendChild(a),n.appendChild(c),n}function n(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const a=document.getElementById("content");a.appendChild(function(){const a=document.getElementById("header"),c=document.createElement("h1");c.classList.add("header-logo"),c.textContent="Burger Factory";const d=document.createElement("div");d.classList.add("nav-buttons");const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Home",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(o),e())}));const s=document.createElement("button");s.classList.add("button-nav"),s.textContent="Menu",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(s),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Classic","Homemade bun, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad.")),e.appendChild(t("Spicy","Homemade bun, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad, Devil sauce.")),e.appendChild(t("Double","Homemade bun, Factory sauce, Tomato, Cheddar, Double Angus Beef, Pickles, Iceberg salad.")),e.appendChild(t("Bacon","Homemade bun, Bacon, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad.")),e}())}())}));const i=document.createElement("button");return i.classList.add("button-nav"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("location");const n=document.createElement("i");n.classList.add("fa-solid"),n.classList.add("fa-location-dot");const a=document.createElement("p");a.classList.add("location-para"),a.textContent="Bucuresti, Romania",t.append(n,a);const c=document.createElement("div");c.classList.add("number");const d=document.createElement("i");d.classList.add("fa-solid"),d.classList.add("fa-phone");const o=document.createElement("p");o.classList.add("number-para"),o.textContent="+123 456 7890",c.append(d,o);const s=document.createElement("div");s.classList.add("map");const i=document.createElement("img");return i.src="./images/map.png",i.alt="Location Map",s.append(i),e.append(t,c,s),e}())}())})),d.appendChild(o),d.appendChild(s),d.appendChild(i),a.appendChild(c),a.appendChild(d),a}()),a.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),a.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} Daniel Grec`;const n=document.createElement("a");n.href="https://github.com/DanielGrec";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),n(document.querySelector(".button-nav")),e()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDdkMsR0FDRCxDRWpHQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG5cdGNvbnN0IGhvbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkaW5nXCIpO1xuXHRob21lSGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZVwiO1xuXHRjb25zdCBob21lTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhvbWVMb2dvLmNsYXNzTGlzdC5hZGQoXCJob21lLWxvZ29cIik7XG5cdGhvbWVMb2dvLnNyYyA9IFwiLi9pbWFnZXMvYnVyZ2VyLnBuZ1wiO1xuXHRob21lTG9nby5hbHQgPSBcIkJ1cmdlciBMb2dvXCI7XG5cblx0Y29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcImhvbWUtdGl0bGVcIik7XG5cdGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIGJlc3QgYnVyZ2VyIGluIHRvd25cIjtcblx0Y29uc3QgaG9tZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0aG9tZVBhcmEuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFyYVwiKTtcblx0aG9tZVBhcmEudGV4dENvbnRlbnQgPVxuXHRcdFwiV2UncmUgYSBzbWFsbCBidXJnZXIgZmFjdG9yeSBmb2N1c2luZyBvbiBtYWtpbmcgdGhlIGJlc3QgYnVyZ2VycyBmb3Igb3VyIGhhcHB5IGN1c3RvbWVycy5cIjtcblx0Y29uc3QgaG9tZUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0aG9tZUNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFjdFwiKTtcblx0aG9tZUNvbnRhY3QudGV4dENvbnRlbnQgPVxuXHRcdFwiSGVhZCBvdmVyIHRvIG91ciBjb250YWN0IHBhZ2UgdG8gcGxhY2UgeW91ciBvcmRlciFcIjtcblxuXHRob21lLmFwcGVuZENoaWxkKGhvbWVIZWFkaW5nKTtcblx0aG9tZS5hcHBlbmRDaGlsZChob21lTG9nbyk7XG5cdGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcblx0aG9tZS5hcHBlbmRDaGlsZChob21lUGFyYSk7XG5cdGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhY3QpO1xuXHRyZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cdG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cblx0bWVudS5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVNZW51SXRlbShcblx0XHRcdFwiQ2xhc3NpY1wiLFxuXHRcdFx0XCJIb21lbWFkZSBidW4sIEZhY3Rvcnkgc2F1Y2UsIFRvbWF0bywgQ2hlZGRhciwgQW5ndXMgQmVlZiwgUGlja2xlcywgSWNlYmVyZyBzYWxhZC5cIlxuXHRcdClcblx0KTtcblx0bWVudS5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVNZW51SXRlbShcblx0XHRcdFwiU3BpY3lcIixcblx0XHRcdFwiSG9tZW1hZGUgYnVuLCBGYWN0b3J5IHNhdWNlLCBUb21hdG8sIENoZWRkYXIsIEFuZ3VzIEJlZWYsIFBpY2tsZXMsIEljZWJlcmcgc2FsYWQsIERldmlsIHNhdWNlLlwiXG5cdFx0KVxuXHQpO1xuXHRtZW51LmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZU1lbnVJdGVtKFxuXHRcdFx0XCJEb3VibGVcIixcblx0XHRcdFwiSG9tZW1hZGUgYnVuLCBGYWN0b3J5IHNhdWNlLCBUb21hdG8sIENoZWRkYXIsIERvdWJsZSBBbmd1cyBCZWVmLCBQaWNrbGVzLCBJY2ViZXJnIHNhbGFkLlwiXG5cdFx0KVxuXHQpO1xuXHRtZW51LmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZU1lbnVJdGVtKFxuXHRcdFx0XCJCYWNvblwiLFxuXHRcdFx0XCJIb21lbWFkZSBidW4sIEJhY29uLCBGYWN0b3J5IHNhdWNlLCBUb21hdG8sIENoZWRkYXIsIEFuZ3VzIEJlZWYsIFBpY2tsZXMsIEljZWJlcmcgc2FsYWQuXCJcblx0XHQpXG5cdCk7XG5cblx0cmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG5cdGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuXHRjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0Zm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG5cdGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuXHRjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRmb29kSW1hZ2Uuc3JjID0gYC4vaW1hZ2VzL2J1cmdlcnMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG5cdGZvb2RJbWFnZS5hbHQgPSBgJHtuYW1lfWA7XG5cblx0bWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcblx0bWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuXHRtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuXG5cdHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cdG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuXG5cdGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZChcImhlYWRlci1sb2dvXCIpO1xuXHRoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJCdXJnZXIgRmFjdG9yeVwiO1xuXG5cdGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRuYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uc1wiKTtcblxuXHRjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0aG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcblx0aG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXHRob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcblx0XHRzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG5cdFx0bG9hZEhvbWUoKTtcblx0fSk7XG5cblx0Y29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG5cdG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblx0bWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG5cdFx0c2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuXHRcdGxvYWRNZW51KCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuXHRjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cdGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuXHRcdHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcblx0XHRsb2FkQ29udGFjdCgpO1xuXHR9KTtcblxuXHRuYXZCdXR0b25zLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXHRuYXZCdXR0b25zLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXHRuYXZCdXR0b25zLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG5cdGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnMpO1xuXHRyZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG5cdGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1uYXZcIik7XG5cblx0YnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cdG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuXHRyZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuXHRjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gRGFuaWVsIEdyZWNgO1xuXG5cdGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRGFuaWVsR3JlY1wiO1xuXG5cdGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblx0Z2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xuXHRnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cblx0Z2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cdGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuXHRyZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJXZWJzaXRlKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG5cdHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpO1xuXHRsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJXZWJzaXRlO1xuIiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cblx0Y29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG5cdGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuXHRsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuXHRsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLWxvY2F0aW9uLWRvdFwiKTtcblx0Y29uc3QgbG9jYXRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGxvY2F0aW9uUGFyYS5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tcGFyYVwiKTtcblx0bG9jYXRpb25QYXJhLnRleHRDb250ZW50ID0gXCJCdWN1cmVzdGksIFJvbWFuaWFcIjtcblxuXHRsb2NhdGlvbkRpdi5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvblBhcmEpO1xuXG5cdGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG51bWJlckRpdi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyXCIpO1xuXHRjb25zdCBudW1iZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cdG51bWJlckljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuXHRudW1iZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1waG9uZVwiKTtcblx0Y29uc3QgbnVtYmVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRudW1iZXJQYXJhLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItcGFyYVwiKTtcblx0bnVtYmVyUGFyYS50ZXh0Q29udGVudCA9IFwiKzEyMyA0NTYgNzg5MFwiO1xuXG5cdG51bWJlckRpdi5hcHBlbmQobnVtYmVySWNvbiwgbnVtYmVyUGFyYSk7XG5cblx0Y29uc3QgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWFwRGl2LmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG5cdGNvbnN0IG1hcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdG1hcEltZy5zcmMgPSBcIi4vaW1hZ2VzL21hcC5wbmdcIjtcblx0bWFwSW1nLmFsdCA9IFwiTG9jYXRpb24gTWFwXCI7XG5cblx0bWFwRGl2LmFwcGVuZChtYXBJbWcpO1xuXG5cdGNvbnRhY3QuYXBwZW5kKGxvY2F0aW9uRGl2LCBudW1iZXJEaXYsIG1hcERpdik7XG5cdHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblx0bWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cdG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJpbXBvcnQgcmVuZGVyV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbnJlbmRlcldlYnNpdGUoKTtcbiJdLCJuYW1lcyI6WyJtYWluIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJob21lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhvbWVIZWFkaW5nIiwiaG9tZUxvZ28iLCJzcmMiLCJhbHQiLCJob21lVGl0bGUiLCJob21lUGFyYSIsImhvbWVDb250YWN0IiwiY3JlYXRlSG9tZSIsImNyZWF0ZU1lbnVJdGVtIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWVudUl0ZW0iLCJmb29kTmFtZSIsImZvb2REZXNjcmlwdGlvbiIsImZvb2RJbWFnZSIsInRvTG93ZXJDYXNlIiwic2V0QWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0aGlzIiwicmVtb3ZlIiwiY29udGVudCIsImhlYWRlciIsImhlYWRlckxvZ28iLCJuYXZCdXR0b25zIiwiaG9tZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJtZW51QnV0dG9uIiwibWVudSIsImNyZWF0ZU1lbnUiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdCIsImxvY2F0aW9uRGl2IiwibG9jYXRpb25JY29uIiwibG9jYXRpb25QYXJhIiwiYXBwZW5kIiwibnVtYmVyRGl2IiwibnVtYmVySWNvbiIsIm51bWJlclBhcmEiLCJtYXBEaXYiLCJtYXBJbWciLCJjcmVhdGVDb250YWN0IiwiY3JlYXRlSGVhZGVyIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlTWFpbiIsImZvb3RlciIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdpdGh1YkxpbmsiLCJocmVmIiwiZ2l0aHViSWNvbiIsImNyZWF0ZUZvb3RlciIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9