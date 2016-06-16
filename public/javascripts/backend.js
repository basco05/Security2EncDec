var prefixUrl = "http://localhost:3000";

$(function(){
	$("#sendButton").on("click",function(){
		var name = $("#naam").val();
		var tekst = $("#geheimeTekst").val();
		var password = $("#wachtwoord").val();
		if(name.length > 0 && password.length > 0){
			if(tekst.length > 0){
				sendSecret(name,tekst,password);
			}else{
				getSecret(name,password);
			}
		}else{
			alert("naam en/of wachtwoord niet geset")
		}
	})
})

function getSecret(name,password){
	$.get(prefixUrl+"/secret?name="+name+"&password="+password,function(data){
		$("#geheimeTekst").val(data);
	});
}

function sendSecret(name,tekst,password){
	$.ajax({
		url:prefixUrl+"/secret",
		method:"POST",
		data:{name:name,secret:tekst,password:password},
		success:function(data,status){
			$("#geheimeTekst").val("");
			$("#naam").val("");
			$("#wachtwoord").val("");
		}
	})
}
