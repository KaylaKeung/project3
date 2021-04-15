$(function() {
	render()
var apiString = 'diningtable'

$(".pt-page").each( function() {
	var $page = $( this );
	$page.data( 'originalClassList', $page.attr( 'class' ) );
} );
$(".box").eq(0).addClass( 'pt-page-current' );
$(".first-floor .f1").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr1").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f1").addClass('active')
	apiString = "diningtable";
	showFurnitures("#floor1 .grid",1)
	// renderImg()
	changeView('#floor1','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".first-floor .f2").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr2").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f2").addClass('active')
	apiString = "consoletable";
	showFurnitures("#floor1 .grid",1)
	// renderImg()
	changeView('#floor1','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".first-floor .f3").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr3").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f3").addClass('active')
	apiString = "coffeetable";
	showFurnitures("#floor1 .grid",1)
	// renderImg()
	changeView('#floor1','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s1").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr21").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	// renderImg()
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s2").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr22").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f2").addClass('active')
	apiString = "stool";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s3").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr23").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f3").addClass('active')
	apiString = "decorativechair";
	showFurnitures("#floor2 .grid",2)
	// renderImg()
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s4").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr24").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f4").addClass('active')
	apiString = "longechair";
	showFurnitures("#floor2 .grid",2)
	// renderImg()
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s5").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr25").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f5").addClass('active')
	apiString = "sofa";
	showFurnitures("#floor2 .grid",2)
	// renderImg()
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".second-floor .s6").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr26").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f6").addClass('active')
	apiString = "regularchair";
	showFurnitures("#floor2 .grid",2)
	// renderImg()
	changeView('#floor2','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
$(".third-floor .circle").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".fr31").css('display','flex')
	$(".floor-con-box .circle").removeClass('active')
	// $(".floor3 .f1").addClass('active')
	apiString = "other";
	showFurnitures("#floor3 .grid",3)
	// renderImg()
	changeView('#floor3','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})

$(".logo-box").click(()=>{
	changeView('#box','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
})
var tab1 = $(".floors-tab .tab1");
	tab1.click(function () {
		// $(".floors-tab .circle").removeClass('activeTab')
		// tab1.addClass('activeTab')
		// $(".floor1").css('display','block')
		// $(".floor2").css('display','none')
		// $(".floor3").css('display','none')
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".floor-con-box .circle").removeClass('active')
		$(".floor1 .f1").addClass('active')
		$(".fr1").css('display','flex')
		apiString = "diningtable";
	  showFurnitures("#floor1 .grid",1)
	  changeView('#floor1','pt-page-moveToBottom','pt-page-moveFromTop')
	});
	var tab2 = $(".floors-tab .tab2");
	tab2.click(function () {
		// $(".floors-tab .circle").removeClass('activeTab')
		// tab2.addClass('activeTab')
		// $(".floor1").css('display','none')
		// $(".floor2").css('display','block')
		// $(".floor3").css('display','none')
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".floor-con-box .circle").removeClass('active')
		$(".floor2 .f1").addClass('active')
		$(".fr21").css('display','flex')
		apiString = "bench";
	  showFurnitures("#floor2 .grid",2)
	  $currPage = $(".pt-page-current").eq(0);
	  console.log($currPage.attr("id"))
	  if($currPage.attr("id") == 'floor1'){
		  changeView('#floor2','pt-page-moveToTop','pt-page-moveFromBottom')
	  }else{
		  changeView('#floor2','pt-page-moveToBottom','pt-page-moveFromTop')
	  }
	});
	var tab3 = $(".floors-tab .tab3");
	tab3.click(function () {
		// $(".floors-tab .circle").removeClass('activeTab')
		// tab3.addClass('activeTab')
		// $(".floor1").css('display','none')
		// $(".floor2").css('display','none')
		// $(".floor3").css('display','block')
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr31").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		apiString = "other";
	  showFurnitures("#floor3 .grid",3)
	  changeView('#floor3','pt-page-moveToTop','pt-page-moveFromBottom')
	});

function renderImg(){
	console.log($(".image-container"))
	furnitures.forEach((item,index)=>{
		let previewImage = $(".image-container").eq(index)
		showPreviewImage(previewImage[0]);
	})
}
//当前页面移动完毕
var endCurrPage = false;
//后续页面移动完毕
var endNextPage = false;
var animEndEventNames = {
	'WebkitAnimation' : 'webkitAnimationEnd',
	'OAnimation' : 'oAnimationEnd',
	'msAnimation' : 'MSAnimationEnd',
	'animation' : 'animationend'
},
// animation end event name
animEndEventName = animEndEventNames[Modernizr.prefixed( 'animation' )]
function changeView(newView,outClass,inClass){
	render()
		$currPage = $(".pt-page-current").eq(0);
		$nextPage = $(newView);
		// console.log(newView,outClass,inClass)
		// console.log($currPage,$nextPage)
		//清除原来添加的动画，层级等样式(正常动画结束时会自动清除，这样做防止用户在动画结束前就点击切换其他的)
		$(".pt-page").each( function() {
			$(this).attr( 'class', $(this).data( 'originalClassList' ) );
		});
		$currPage.addClass("pt-page-current");
		$nextPage.addClass("pt-page-current");
		
		//如果就是当页则不切换
		if($currPage.attr("id") == $nextPage.attr("id")){
			return;
		}
		
		//新页面入场
		$currPage.addClass(outClass).on(animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		//旧页面出场
		
		$nextPage.addClass(inClass).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );
	}
	//所有动画都结束后
	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		//resetPage( $outpage, $inpage );
		//isAnimating = false;
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}	
	$(".page-logo").click(()=>{
		changeView('#box','pt-page-scaleDownUp','pt-page-scaleUp pt-page-delay300')
	})
$("#page101 .right").click(()=>{
	changeView('#page102','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page101 .bottom").click(()=>{
	changeView('#page201','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page101 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f1").addClass('active')
	$(".fr1").css('display','flex')
	apiString = "diningtable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page101 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f1").addClass('active')
	$(".fr1").css('display','flex')
	apiString = "diningtable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page102 .right").click(()=>{
	changeView('#page103','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page102 .left").click(()=>{
	changeView('#page101','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page102 .bottom").click(()=>{
	changeView('#page201','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page102 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f1").addClass('active')
	$(".fr1").css('display','flex')
	apiString = "diningtable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page102 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f2").addClass('active')
	$(".fr2").css('display','flex')
	apiString = "consoletable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page103 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f1").addClass('active')
	$(".fr1").css('display','flex')
	apiString = "diningtable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page103 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor1 .f3").addClass('active')
	$(".fr3").css('display','flex')
	apiString = "coffeetable";
	showFurnitures("#floor1 .grid",1)
	changeView('#floor1','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page103 .left").click(()=>{
	changeView('#page102','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page103 .bottom").click(()=>{
	changeView('#page201','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page201 .right").click(()=>{
	changeView('#page202','pt-page-moveToLeft','pt-page-moveFromRight')
})

$("#page201 .top").click(()=>{
	changeView('#page101','pt-page-moveToBottom','pt-page-moveFromTop')
})
$("#page201 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page201 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page201 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page202 .right").click(()=>{
	changeView('#page203','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page202 .left").click(()=>{
	changeView('#page201','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page202 .top").click(()=>{
	changeView('#page101','pt-page-moveToBottom','pt-page-moveFromTop')
})
$("#page202 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page202 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page202 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f2").addClass('active')
	$(".fr22").css('display','flex')
	apiString = "stool";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})

$("#page203 .right").click(()=>{
	changeView('#page204','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page203 .left").click(()=>{
	changeView('#page202','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page203 .top").click(()=>{
	changeView('#page101','pt-page-moveToBottom','pt-page-moveFromTop')
})
$("#page203 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page203 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page203 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f3").addClass('active')
	$(".fr23").css('display','flex')
	apiString = "decorativechair";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})

$("#page204 .right").click(()=>{
	changeView('#page205','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page204 .left").click(()=>{
	changeView('#page203','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page204 .top").click(()=>{
	changeView('#page101','pt-page-moveToBottom','pt-page-moveFromTop')
})
$("#page204 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page204 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page204 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f4").addClass('active')
	$(".fr24").css('display','flex')
	apiString = "longechair";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})

$("#page205 .right").click(()=>{
	changeView('#page206','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page205 .left").click(()=>{
	changeView('#page204','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page205 .top").click(()=>{
	changeView('#page101','pt-page-moveToBottom','pt-page-moveFromTop')
})
$("#page205 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page205 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page205 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f5").addClass('active')
	$(".fr25").css('display','flex')
	apiString = "sofa";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})

// $("#page206 .right").click(()=>{
// 	$(".fbox1").css('display','none')
// 	$(".fbox2").css('display','none')
// 	$(".fbox3").css('display','none')
// 	$("#floor .circle").removeClass('active')
// 	$(".floor2 .f1").addClass('active')
// 	$(".fr21").css('display','flex')
// 	apiString = "bench";
// 	showFurnitures("#floor2 .grid",2)
// 	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
// })
$("#page206 .left").click(()=>{
	changeView('#page205','pt-page-moveToRight','pt-page-moveFromLeft')
})
$("#page206 .top").click(()=>{
	changeView('#page101','pt-page-moveFromBottom','pt-page-moveToTop')
})
$("#page206 .bottom").click(()=>{
	changeView('#page301','pt-page-moveToTop','pt-page-moveFromBottom')
})
$("#page206 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f1").addClass('active')
	$(".fr21").css('display','flex')
	apiString = "bench";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page206 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	$(".floor2 .f6").addClass('active')
	$(".fr26").css('display','flex')
	apiString = "regularchair";
	showFurnitures("#floor2 .grid",2)
	changeView('#floor2','pt-page-moveToLeft','pt-page-moveFromRight')
})

// $("#page301 .right").click(()=>{
// 	$(".fbox1").css('display','none')
// 	$(".fbox2").css('display','none')
// 	$(".fbox3").css('display','none')
// 	$("#floor .circle").removeClass('active')
// 	// $(".floor3 .f1").addClass('active')
// 	$(".fr31").css('display','flex')
// 	apiString = "other";
// 	showFurnitures("#floor3 .grid",3)
// 	changeView('#floor3','pt-page-moveToLeft','pt-page-moveFromRight')
// })
$("#page301 .page-back").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	// $(".floor3 .f1").addClass('active')
	$(".fr31").css('display','flex')
	apiString = "other";
	showFurnitures("#floor3 .grid",3)
	changeView('#floor3','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page301 .page-floor").click(()=>{
	$(".fbox1").css('display','none')
	$(".fbox2").css('display','none')
	$(".fbox3").css('display','none')
	$(".floor-con-box .circle").removeClass('active')
	// $(".floor3 .f1").addClass('active')
	$(".fr31").css('display','flex')
	apiString = "other";
	showFurnitures("#floor3 .grid",3)
	changeView('#floor3','pt-page-moveToLeft','pt-page-moveFromRight')
})
$("#page301 .top").click(()=>{
	changeView('#page201','pt-page-moveFromBottom','pt-page-moveToTop')
})

$("#fr1").click(()=>{
		changeView('#page101','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr2").click(()=>{
		changeView('#page102','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr3").click(()=>{
		changeView('#page103','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr21").click(()=>{
		changeView('#page201','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr22").click(()=>{
		changeView('#page202','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr23").click(()=>{
		changeView('#page203','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr24").click(()=>{
		changeView('#page204','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr25").click(()=>{
		changeView('#page205','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr26").click(()=>{
		changeView('#page206','pt-page-moveToLeft','pt-page-moveFromRight')
	})
	$("#fr31").click(()=>{
		changeView('#page301','pt-page-moveToLeft','pt-page-moveFromRight')
	})

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyw5v6LxIabKZUt7" }).base(
  "appncfimbiSqlTxDx"
);

base("furnitures").select({}).eachPage(gotPageOfFurnitures, gotAllFurnitures);

const furnitures = [];

// callback function that receives our data
function gotPageOfFurnitures(records, fetchNextPage) {
  console.log("gotPageOfFurnitures()");
  // add the records from this page to our books array
  furnitures.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllFurnitures(err) {
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFurnitures();
  // showFurnitures();
}

function consoleLogFurnitures() {
  console.log("consoleLogFurnitures()");
  furnitures.forEach((furniture) => {
    // console.log("Furniture:", furniture);
  });
}

function showFurnitures(view,floor) {
	document.querySelector(view).innerText="";
	console.log(furnitures)
	furnitures.forEach((furniture)=>{
		console.log(furniture)
		var previewImage = document.createElement("div");
    previewImage.classList.add("image-container");
	// document.querySelector(view).innerText="";
    document.querySelector(view).append(previewImage);
	
    var furnitureImage = document.createElement("img");
    furnitureImage.classList.add("preview-image");
    furnitureImage.src = furniture.fields.image[0].url;
    //append
    previewImage.append(furnitureImage);
    

    // 连接airtable的“floor”来进行分类
    var furnitureGenre = furniture.fields.floor;
    furnitureGenre.forEach(function (floor) {
      previewImage.classList.add(floor);
    });
    //房间分类
    //连接airtable的每个“floor”里的标签
    var furnitureGenre = furniture.fields.floor;
    furnitureGenre.forEach(function (floor) {
      previewImage.classList.add(floor);
    });
	
	
	showPreviewImage(previewImage);
	
	var modalBox = document.createElement("div");
	modalBox.classList.add("modal-box");
	previewImage.append(modalBox);
	var modalImageBox = document.createElement("div");
	modalImageBox.classList.add("modal-image-box");
	var modalImage = document.createElement("img");
	modalImage.classList.add("modal-image");
	modalImage.src = furniture.fields.image[0].url;
	modalImageBox.append(modalImage);
	modalBox.append(modalImageBox);
	var modalFooter = document.createElement("div");
	modalFooter.classList.add("modal-footer");
	var modalFooterImg = document.createElement("img");
	modalFooterImg.classList.add("modal-footer-img");
	var modalFooterName = document.createElement("p");
	modalFooterName.classList.add("modal-footer-name");
	modalFooterName.innerText = furniture.fields.name;
	var modalFooterDesigner = document.createElement("p");
	modalFooterDesigner.classList.add("modal-footer-designer");
	modalFooterDesigner.innerText = furniture.fields.designer;
	var modalFooterYear = document.createElement("p");
	modalFooterYear.classList.add("modal-footer-year");
	modalFooterYear.innerText = furniture.fields.year;
	if(floor == 1){
		modalFooterImg.src = './img/floor1-x.png';
	}else if(floor == 2){
		modalFooterImg.src = './img/floor2-x.png';
	}else{
		modalFooterImg.src = './img/floor3-x.png';
	}
	modalFooter.append(modalFooterImg)
	modalFooter.append(modalFooterName)
	modalFooter.append(modalFooterDesigner)
	modalFooter.append(modalFooterYear)
	modalBox.append(modalFooter);
	var modalClose = document.createElement("div");
	modalClose.classList.add("modal-close");
	modalClose.innerText = "X";
	modalBox.append(modalClose);
	
	
    //分类：101-diningtable
    var f1 = $(".floor1 .f1");
	
    f1.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr1").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f1.addClass('active')
		apiString = "diningtable";
      showPreviewImage(previewImage);
    });
    //分类102:coffeetable
	var f2 = $(".floor1 .f2");
    f2.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr2").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f2.addClass('active')
		apiString = "consoletable";
		showPreviewImage(previewImage);
      //每个别的分类可以根据给的名字复制黏贴这个代码就能连接api了

      //我这里为了方便搞了个重置键，这个作业不需要
    });
	//分类103:coffeetable
	var f3 = $(".floor1 .f3");
	f3.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr3").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f3.addClass('active')
		apiString = "coffeetable";
		showPreviewImage(previewImage);
	  //每个别的分类可以根据给的名字复制黏贴这个代码就能连接api了
	
	  //我这里为了方便搞了个重置键，这个作业不需要
	});
	
	var f21 = $(".floor2 .f1");
	f21.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr21").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f21.addClass('active')
		apiString = "bench";
		showPreviewImage(previewImage);
	});
	var f22 = $(".floor2 .f2");
	f22.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr22").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f22.addClass('active')
		apiString = "stool";
		showPreviewImage(previewImage);
	});
	var f23 = $(".floor2 .f3");
	f23.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr23").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f23.addClass('active')
		apiString = "decorativechair";
		showPreviewImage(previewImage);
	});
	var f24 = $(".floor2 .f4");
	f24.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr24").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f24.addClass('active')
		apiString = "longechair";
		showPreviewImage(previewImage);
	});
	var f25 = $(".floor2 .f5");
	f25.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr25").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f25.addClass('active')
		apiString = "sofa";
		showPreviewImage(previewImage);
	});
	var f26 = $(".floor2 .f6");
	f26.click(function () {
		$(".fbox1").css('display','none')
		$(".fbox2").css('display','none')
		$(".fbox3").css('display','none')
		$(".fr26").css('display','flex')
		$(".floor-con-box .circle").removeClass('active')
		f26.addClass('active')
		apiString = "regularchair";
		showPreviewImage(previewImage);
	});
	
	
    // var filterReset = document.querySelector(".reset");
    // filterReset.addEventListener("click", function () {
    //   previewImage.style.display = "flex";
    // });
    //点击每张图片显示详细信息的信息框，我这里随便选了颜色
    furnitureImage.addEventListener("click", function () {
      modalBox.style.display = "flex";
    });
    //信息框的“X”关闭按钮
    //
    // var button = document.createElement("h4");
    // button.classList.add("button");
    // button.innerText = "X";
    // previewImage.append(button);
    // //按掉“X”之后所有信息消失
    modalClose.addEventListener("click", function () {
	  modalBox.style.display = "none";
    });
  });
}

function showPreviewImage(previewImage){
	if (previewImage.classList.contains(apiString)) {
		previewImage.style.display = "flex";
	  } else {
		previewImage.style.display = "none";
	  }
}






	function render() {
		console.log(2222222)
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
			$(".shixin").width($(".shixin").width())
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
			if(isPc){
				$(".floor-con-box .circle").width(0.035*w)
				$(".floors-tab .circle").width(0.035*w)
			}else{
				$(".floor-con-box .circle").width(0.1*w)
				$(".floors-tab .circle").width(0.065*w)
			}
			
			$(".floor-con-box .circle").height($(".floor-con-box .circle").width())
			$(".floors-tab .circle").height($(".floors-tab .circle").width())
			
			// $(".cx").width($(".cx").width())
			if (isPc) {
				arrowBox.width(0.1 * h);
				arrowW = arrowBox.width();
				console.log(arrowW)
				arrowBox.height(arrowW)
				arrowBox.css({
					top: '83.2%'
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
							top: '83.2%',
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