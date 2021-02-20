$(document).ready(
	function(){

		//------------STCKY NAV--------------
		//lấy about-section làm cột mốc, khi nào nhìn thấy about-section thì thực hiện tác vụ
		$('.about-section').waypoint( 
			function(direction){
				//nếu kéo trang web xuống
				if(direction == "down")
				{
					$('nav').addClass('sticky');
				}
				else{
					$('nav').removeClass('sticky');
					//nếu ko phải động tác kéo xuống, đến vị trí đó sẽ remove
				}
			},{
				offset:'600px'//khoảng cách từ mốc lên phía bên trên
			}
		)

		//--------------SCROLL--------------
		$('a').click(function(event)
		{
			$('html, body').animate(
				{
					scrollTop: $( $.attr(this, 'href') ).offset().top
				}, 700
			);
			event.preventDefault();
		}
		);

		// mobile navigation
		$('.mobile-nav-icon').click(
			function(){
				$('.main-nav').slideToggle(200); // slideToggle chỉ có hiệu quả khi dùng display

				if($('.mobile-nav-icon').hasClass('fa-bars')){
					$('.mobile-nav-icon').addClass('fa-times');
					$('.mobile-nav-icon').removeClass('fa-bars')
				}
				else{
					$('.mobile-nav-icon').addClass('fa-bars');
					$('.mobile-nav-icon').removeClass('fa-times')
				}
			}
		)
	}
)