landingPageHtml = `
<div id="upicko_landing_page" class="upicko page-landing responsive components-built" cz-shortcut-listen="true" style="display: none;">
	<div class="hero-container" style="height: 190px; padding: 30px;">
		<div class="layout-centered-content">
			<video autoplay="true" loop="" poster="https://raw.githubusercontent.com/UPICKO/external_files/master/images/strawberry_background_1600x480.png" id="bgvid"></video>
		    <h1 class="entry-title">Find Australian Upick Farms</h1>    
		    <h2>Booking tickets and buying fresh foods from pick-your-own farms in Australia</h2>
  		</div>
  	</div>

	<div class="section layout-centered-content">
	    <h1 class="section-header">Fruits In Season</h1>
	    <h2 class="subheader">Find what kind of fruits can be picked in current season.</h2>

		<!-- #region Jssor Slider Begin -->
		<div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:980px;height:380px;overflow:hidden;visibility:hidden;">
			<!-- Loading Screen -->
			<div data-u="loading" class="jssorl-004-double-tail-spin" style="position:absolute;top:0px;left:0px;text-align:center;background-color:rgba(0,0,0,0.7);">
				<img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="https://cdn.rawgit.com/UPICKO/external_files/master/images/double-tail-spin.svg" />
			</div>
			<div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:980px;height:380px;overflow:hidden;">
				<div>
					<a href="https://www.upicko.com/?category=u-pick-access&view=grid&checkbox_filter_option_180777=180777"><img data-u="image" src="https://github.com/UPICKO/external_files/raw/master/images/in_season_fruits/mandarine_620.png" /></a>
				</div>
				<div>
					<a href="https://www.upicko.com/?category=u-pick-access&view=grid&checkbox_filter_option_147326=147326"><img data-u="image" src="https://github.com/UPICKO/external_files/raw/master/images/in_season_fruits/kiwifruit_620.png" /></a>
				</div>
				<div>
					<a href="https://www.upicko.com/?category=u-pick-access&view=grid&checkbox_filter_option_147323=147323"><img data-u="image" src="https://github.com/UPICKO/external_files/raw/master/images/in_season_fruits/strawberries_620.png" /></a>
				</div>
				<a data-u="any" href="https://www.upicko.com" style="display:none">upicko slider</a>
			</div>
			<!-- Bullet Navigator -->
			<div data-u="navigator" class="jssorb051" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
				<div data-u="prototype" class="i" style="width:16px;height:16px;">
					<svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
						<circle class="b" cx="8000" cy="8000" r="5800"></circle>
					</svg>
				</div>
			</div>
			<!-- Arrow Navigator -->
			<div data-u="arrowleft" class="jssora051" style="width:65px;height:65px;top:0px;left:45px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
				<svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
					<polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
				</svg>
			</div>
			<div data-u="arrowright" class="jssora051" style="width:65px;height:65px;top:0px;right:45px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
				<svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
					<polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
				</svg>
			</div>
		</div>
		<!-- #endregion Jssor Slider End -->
  	</div>

	<div class="section layout-centered-content">
	    <h1 class="section-header">Explore Farms</h1>
	    <h2 class="subheader">Find Upick Farms in your city, or explore unique ones around Australia.</h2>
    	<ul class="block-grid cf">
			<li class="double-wide" style="background:url(https://cdn.rawgit.com/UPICKO/external_files/master/images/sydney_620x300.png) center center no-repeat; background-size:cover;">
				<a href="https://www.upicko.com/?category=u-pick-access&boundingbox=-37.505018%2C140.999279%2C-28.157072%2C153.638516&distance_max=400.2410718492973&lc=-33.876141%2C151.207372&lq=New+South+Wales%2C+Australia&q=NSW">
			        <span class="label-center">Sydney</span>
		      	</a>
		    </li>
			<li class="no-right-margin" style="background:url(https://cdn.rawgit.com/UPICKO/external_files/master/images/melbourne_300x300.png) center center no-repeat; background-size:cover;">
				<a href="https://www.upicko.com/?boundingbox=-39.159093%2C140.961682%2C-33.980647%2C149.976488&distance_max=400.4794017345896&lc=-37.812125%2C144.963319&q=VIC">
			        <span class="label-center">Melbourne</span>
		      	</a>
		    </li>
      		<li style="background:url(https://cdn.rawgit.com/UPICKO/external_files/master/images/brisbane_300x300.png) center center no-repeat; background-size:cover;">
      			<a href="https://www.upicko.com/?category=u-pick-access&q=QLD">
	        		<span class="label-center">Brisbane</span>
      			</a>
      		</li>
      		<li class="" style="background:url(https://cdn.rawgit.com/UPICKO/external_files/master/images/adelaide_300x300.png) center center no-repeat; background-size:cover;">
      			<a href="https://www.upicko.com/?category=u-pick-access&q=SA">
        			<span class="label-center">Adelaide</span>
      			</a>
      		</li>
      		<li class="no-right-margin" style="background:url(https://cdn.rawgit.com/UPICKO/external_files/master/images/perth_300x300.png) center center no-repeat; background-size:cover;">
      			<a href="https://www.upicko.com/?category=u-pick-access&q=WA">
        			<span class="label-center">Perth</span>
      			</a>
      		</li>
    	</ul>
    	<div class="text-centered paddingTop20">
      		<a class="" href="https://www.upicko.com/?category=u-pick-access" style="font-size: 24px; color: #fc913b;">Explore more farms around Australia</a>
    	</div>
  	</div>

  	<div class="section layout-centered-content">
		<h1 class="section-header">Featured Farms</h1>
		<div id="jssor_2" style="position:relative;margin:0 auto;top:0px;left:0px;width:960px;height:480px;overflow:hidden;visibility:hidden;background-color:#24262e;">
			<!-- Loading Screen -->
			<div data-u="loading" class="jssorl-004-double-tail-spin" style="position:absolute;top:0px;left:0px;text-align:center;background-color:rgba(0,0,0,0.7);">
				<img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="https://cdn.rawgit.com/UPICKO/external_files/master/images/double-tail-spin.svg" />
			</div>
			<div data-u="slides" style="cursor:default;position:relative;top:0px;left:240px;width:720px;height:480px;overflow:hidden;">
				<div>
					<a href="https://www.upicko.com/en/listings/371918-all-berries-upick-vic"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/AllBerryPick.png" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/AllBerryPick.png" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/393800-fords-farm-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/FordsFarm.png" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/FordsFarm.png" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/378583-gatewayestate-indoor-strawberry-upick-vic"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/gatewayRealestate.png" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/gatewayRealestate.png" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/413579-golden-grove-orchard-wa"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/goldenGroveOrchard.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/goldenGroveOrchard.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/381521-raynerorchard-farms-upick-vic"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/raynerOrchard.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/raynerOrchard.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/394719-tcp-farmgate-tours-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/TcpFarm.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/TcpFarm.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/406365-tropical-fruit-world-qld"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/tropicalFruitWorld.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/tropicalFruitWorld.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/394402-watkins-family-farm-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/WatkinFamilyFarm.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/WatkinFamilyFarm.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/399030-turners-beach-berry-patch-tas"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/turners.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/turners.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/393950-kookootonga-chestnut-and-walnut-farm-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/kookootonga.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/kookootonga.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/394381-kembla-cherry-orchard-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/kembla.jpg" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/kembla.jpg" />
				</div>
				<div>
					<a href="https://www.upicko.com/en/listings/401888-appleshack-at-glenbernie-orchard-nsw"><img data-u="image" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/appleshack.png" /></a>
					<img data-u="thumb" src="https://raw.githubusercontent.com/UPICKO/external_files/master/images/feature_farms/appleshack.png" />
				</div>
				<a data-u="any" href="https://www.upicko.com" style="display:none">upicko carousel</a>
			</div>
			<!-- Thumbnail Navigator -->
			<div data-u="thumbnavigator" class="jssort01-99-66" style="position:absolute;left:0px;top:0px;width:240px;height:480px;" data-autocenter="2">
				<!-- Thumbnail Item Skin Begin -->
				<div data-u="slides" style="cursor: default;">
					<div data-u="prototype" class="p">
						<div class="w">
							<div data-u="thumbnailtemplate" class="t"></div>
						</div>
						<div class="c"></div>
					</div>
				</div>
				<!-- Thumbnail Item Skin End -->
			</div>
			<!-- Arrow Navigator -->
			<span data-u="arrowleft" class="jssora05l" style="top:0px;left:248px;width:40px;height:40px;" data-autocenter="2"></span>
			<span data-u="arrowright" class="jssora05r" style="top:0px;right:8px;width:40px;height:40px;" data-autocenter="2"></span>
		</div>
		<div class="text-centered paddingTop20">
      		<a href="https://www.upicko.com/?category=u-pick-access" style="font-size: 24px; color: #fc913b;">See all of our farms</a>
    	</div>
	</div>
	<footer style="background: url(https://cdn.rawgit.com/UPICKO/external_files/master/images/upick_footer_bg.png) 0px 0px repeat;">
		<div class="layout-centered-content">
			<div class="row footer-links">
			  <div class="col-xs-12 col-sm-3">
				<div class="row">
				  <h3>Top cities</h3>
				  <div class="col-xs-6">
					<a href="https://www.upicko.com/?category=u-pick-access&boundingbox=-37.505018%2C140.999279%2C-28.157072%2C153.638516&distance_max=400.2410718492973&lc=-33.876141%2C151.207372&lq=New+South+Wales%2C+Australia&q=NSW">Sydney</a>
					<a href="https://www.upicko.com/?boundingbox=-39.159093%2C140.961682%2C-33.980647%2C149.976488&distance_max=400.4794017345896&lc=-37.812125%2C144.963319&q=VIC">Melbourne</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=QLD">Brisbane</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=SA">Adelaide</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=WA">Perth</a>
				  </div>
				  <div class="col-xs-6">
					<a href="https://www.upicko.com/?category=u-pick-access&q=TAS">Hobart</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=QLD">Gold Coast</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=NSW">Canberra</a>
					<a href="https://www.upicko.com/?category=u-pick-access&q=NT">Darwin</a>
				  </div>
				</div>
			  </div>
			</div>
			<div class="row">
			  <div class="col-xs-12">
				<ul class="bottom-footer-links">
				  <li>©2017 Upicko</li>
				  <li><a href="https://www.upicko.com/infos/about">About</a></li>
				  <li><a href="https://www.upicko.com/user_feedbacks/new">Contact Us</a></li>
				  <!--<li><a href="http://studiotimeio.wix.com/studiotime">Blog</a></li>-->
				  <li><a href="#">Terms</a></li>
				  <li><a href="#">Privacy</a></li>
				</ul>
			  </div>
			</div>
		</div>
	</footer>
</div>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            var jssor_1_options = {
              $AutoPlay: 1,
              $SlideWidth: 640,
              $Cols: 2,
              $Align: 170,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1350);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
			$(window).unbind()
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
        });
    </script>
    <style>
        /* jssor slider loading skin double-tail-spin css */

        .jssorl-004-double-tail-spin img {
            animation-name: jssorl-004-double-tail-spin;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-004-double-tail-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }


        .jssorb051 .i {position:absolute;cursor:pointer;}
        .jssorb051 .i .b {fill:#fff;fill-opacity:0.5;stroke:#000;stroke-width:400;stroke-miterlimit:10;stroke-opacity:0.5;}
        .jssorb051 .i:hover .b {fill-opacity:.7;}
        .jssorb051 .iav .b {fill-opacity: 1;}
        .jssorb051 .i.idn {opacity:.3;}

        .jssora051 {display:block;position:absolute;cursor:pointer;}
        .jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}
        .jssora051:hover {opacity:.8;}
        .jssora051.jssora051dn {opacity:.5;}
        .jssora051.jssora051ds {opacity:.3;pointer-events:none;}
    </style>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {

            var jssor_2_SlideshowTransitions = [
              {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
              {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
            ];

            var jssor_2_options = {
              $AutoPlay: 1,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_2_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $Cols: 6,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };

            var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

            /*responsive code begin*/
            /*remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 960);
                    refSize = Math.max(refSize, 300);
                    jssor_2_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
        });
    </script>
    <style>
        .jssora05l, .jssora05r {
            display: block;
            position: absolute;
            /* size of arrow element */
            width: 40px;
            height: 40px;
            cursor: pointer;
            background: url('https://raw.githubusercontent.com/UPICKO/external_files/master/images/arrow_slider.png') no-repeat;
            overflow: hidden;
        }
        .jssora05l { background-position: -10px -40px; }
        .jssora05r { background-position: -70px -40px; }
        .jssora05l:hover { background-position: -130px -40px; }
        .jssora05r:hover { background-position: -190px -40px; }
        .jssora05l.jssora05ldn { background-position: -250px -40px; }
        .jssora05r.jssora05rdn { background-position: -310px -40px; }
        .jssora05l.jssora05lds { background-position: -10px -40px; opacity: .3; pointer-events: none; }
        .jssora05r.jssora05rds { background-position: -70px -40px; opacity: .3; pointer-events: none; }
        .jssort01-99-66 .p {    position: absolute;    top: 0;    left: 0;    width: 99px;    height: 66px;}
        .jssort01-99-66 .t {    position: absolute;    top: 0;    left: 0;    width: 100%;    height: 100%;    border: none;}
        .jssort01-99-66 .w {    position: absolute;    top: 0px;    left: 0px;    width: 100%;    height: 100%;}
        .jssort01-99-66 .c {    position: absolute;    top: 0px;    left: 0px;    width: 95px;    height: 62px;    border: #000 2px solid;    box-sizing: content-box;    background: url('https://raw.githubusercontent.com/UPICKO/external_files/master/images/plus_slider.png') -800px -800px no-repeat;    _background: none;}
        .jssort01-99-66 .pav .c {    top: 2px;    _top: 0px;    left: 2px;    _left: 0px;    width: 95px;    height: 62px;    border: #000 0px solid;    _border: #fff 2px solid;    background-position: 50% 50%;}
        .jssort01-99-66 .p:hover .c {    top: 0px;    left: 0px;    width: 97px;    height: 64px;    border: #fff 1px solid;    background-position: 50% 50%;}
        .jssort01-99-66 .p.pdn .c {    background-position: 50% 50%;    width: 95px;    height: 62px;    border: #000 2px solid;}* html 
        .jssort01-99-66 .c, * html .jssort01-99-66 .pdn .c, * html .jssort01-99-66 .pav .c {width: 99px; height: 66px;}
    </style>
	<link href="https://cdn.rawgit.com/UPICKO/external_files/master/css/landingpage.css" media="screen" rel="stylesheet" type="text/css">
`;
