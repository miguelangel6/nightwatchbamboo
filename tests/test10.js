module.exports ={
    'Logeo Master':function(browser){
    var plataforma = "http://postgrados.juanncorpas.edu.co";
    var login = "http://postgrados.juanncorpas.edu.co/login/index.php";

    browser
    .url(login)
    .waitForElementVisible('body',1000)
    .setValue('input[name=username]','nivel7')
    .getValue(".loginform input[name=username]",function(gusername){
            this.verify.equal(typeof gusername, "object");
            this.verify.equal(gusername.status, 0);
            this.verify.equal(gusername.value, "enter username");
	    if(gusername.value==""){
		this.url(login.concat('/?theme=clean'))
		this.setValue('input[id=username]','nivel7')
		this.setValue('input[id=password]','s0m0sLosMastersDel3learningYeah!!')
		this.submitForm('form#login')
		this.url(plataforma.concat('/?theme=default'))
		} else {
		this.setValue('input[id=password]','s0m0sLosMastersDel3learningYeah!!');
                this.submitForm('form#login');
	    }

        });
    }
}