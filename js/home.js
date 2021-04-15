$(document).ready(function() {
	render()
	function render() {
		let isPc;
		setTimeout(() => {
			if ($(window).width() <= 580 || (navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
				))) {
				isPc = false
			} else {
				isPc = true
			}

			let box = $('.box');
			let arrowBox = $('#arrowBox');
			let arrowW;
			// let arrowW=arrowBox.width();
			// console.log(arrowBox,arrowW)
			// arrowBox.height(arrowW)
			let w = $('.box').width();
			let h = $('.box').height();
			console.log(w, h)
			// console.log('width==>',$(".circle").width())
			$(".shixin").height($(".shixin").width())
			$(".circle").height($(".circle").width())
			$(".cxl").height($(".cxl").width())
			$(".cx").height($(".cx").width())
			$(".cx").width($(".cx").width())
			$(".cxm").height($(".cxm").width())
			$(".cms").height($(".cms").width())
			$(".cm").height($(".cm").width())
			$(".cs").height($(".cs").width())
			$(".cs").width($(".cs").width())
			$(".csm").height($(".csm").width())
			// $(".floor-con-box .circle").width('10%')
			setTimeout(()=>{
				console.log($(".floor-con-box .circle").width())
				$(".floor-con-box .circle").height($(".floor-con-box .circle").width())
			},500)
			
			
			// $(".cx").width($(".cx").width())
			if (isPc) {
				arrowBox.width(0.1 * h);
				arrowW = arrowBox.width();
				// console.log(arrowW)
				arrowBox.height(arrowW)
				arrowBox.css({
					top: 0.87 * h + 'px'
				})
				// arrowBox.css({
				// 	top: (h - 126) + 'px'
				// })
				$(".box.pt-page").css("margin-left", -w / 2 + 'px')
			} else {
				arrowBox.width(0.107 * w);
				arrowW = arrowBox.width();
				// console.log(arrowW)
				arrowBox.height(arrowW)
				arrowBox.css({
					top: (0.95 * h - arrowW / 2) + 'px'
				})
				$(".box.pt-page").css("margin-left", '0px')
			}

			let isMoving = false;
			$('.box').mousemove((event) => {
				if (isMoving || !isPc) {
					return false
				}
				let rect = document.getElementById("arrowBox").getBoundingClientRect();
				//中心位置
				center = {
					x: rect.left + (rect.right - rect.left) / 2,
					y: rect.top + (rect.bottom - rect.top) / 2
				}
				// console.log(event)
				const x = arrowBox.offset().left + arrowBox.width() / 2;
				const y = arrowBox.offset().top + arrowBox.height() / 2;
				const rad = Math.atan2(center.y - event.clientY, center.x - event.clientX);
				let deg = rad / (Math.PI / 180) + 180
				arrowBox.css({
					transform: `rotate(${deg}deg)`
				});
			})
			// $('.box').on('touchmove',(event) => {
			// 	if (isMoving) {
			// 		return false
			// 	}
			// 	let rect = document.getElementById("arrowBox").getBoundingClientRect();
			// 	//中心位置
			// 	center = {
			// 		x: rect.left + (rect.right - rect.left) / 2,
			// 		y: rect.top + (rect.bottom - rect.top) / 2
			// 	}
			// 	// console.log(event)
			// 	const x = arrowBox.offset().left + arrowBox.width() / 2;
			// 	const y = arrowBox.offset().top + arrowBox.height() / 2;
			// 	const rad = Math.atan2(center.y - event.clientY, center.x - event.clientX);
			// 	let deg = rad / (Math.PI / 180) + 180
			// 	arrowBox.css({
			// 		transform: `rotate(${deg}deg)`
			// 	});
			// })
			$('.box').mousedown((event) => {
				isMoving = true;
				// console.log(getPos(event))
				let {
					x,
					y
				} = getPos(event);
				// if(isPc){
				// 	arrowBox.animate({
				// 		left: (x - 38) + 'px',
				// 		top: (y - 38) + 'px'
				// 	});
				// }else{
				arrowBox.animate({
					left: (x - arrowW / 2) + 'px',
					top: (y - arrowW / 2) + 'px'
				});
				// }
				setTimeout(() => {
					if (isPc) {
						arrowBox.animate({
							top: 0.87 * h + 'px',
							left: '10.7%'
						});
					} else {
						arrowBox.animate({
							top: (0.95 * h - arrowW / 2) + 'px',
							left: '20%'
						});
					}
					isMoving = false;
				}, 500)
			})

			function getPos(e) {
				var mouse = {
					x: 0,
					y: 0
				}
				var e = e || event;
				console.log(e.clientX, e.clientX, e.pageX, e.pageY)
				// if (e.pageX>e.clientX) {
				mouse.x = e.pageX - box.offset().left;
				mouse.y = e.pageY;
				// } else {
				// 	mouse.x = e.clientX - box.offset().left;
				// 	mouse.y = e.pageY;
				// }
				return mouse;
			}
		}, 500)
	}

	$(window).resize(function() {
		//当浏览器大小变化时
		console.log(1111111111)
		render()
	});
})
