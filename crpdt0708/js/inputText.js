$(function () {

})
		$('#userName').bind({
			onfocus : function (){
				alert("afaf");
				if (this.value=='请输入用户名') {
					this.value='';
				};
			}
			onblur : function() {
				if (this.value=='') {
					this.value='请输入用户名';
				};
			}
		});

		$('#password').bind({
			onfocus : function (){
				if (this.value=='请输入密码') {
					this.value='';
				};
			}
			onblur : function() {
				if (this.value=='') {
					this.value='请输入用户名';
				};
			}
		});