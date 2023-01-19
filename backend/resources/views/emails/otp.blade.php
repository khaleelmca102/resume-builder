<style>
    body{backgroung:#eee; padding:0px; margin:0px;}
</style>

<body style="background:#fff;">
    <div style="font-family:'Open Sans',san-serif; width:600px; margin:20px auto; padding:15px;">
        <table cellpadding="0" cellspacing="0" style="width:620px; background:#fff; border:1px solid #eee; border-radius:6px; -webkit-border-radius:6px; -moz-border-radius:6px;">
            <tr>
                <td colspan="2" style="background:#f6f6f6; padding:5px; text-align:center;"><a href="{{url('index.asp')}}" target="_blank" style="text-align:center; margin:0px 0px 15px 0px;"><img src="{{Config::get('global.base_url')}}{{asset('images/tp-logo.png')}}" style="height:55px;" title="tutorialspoint ebook courses"/></a></td>
            </tr>
            <tr>
                <td colspan="2" style="background:#f6f6f6; color:#5bac3a; font-size:16px; text-align:center; padding:15px 0px; margin:0px 0px 25px 0px;"><b>One Time Password ( OTP ) </b></td>
            </tr>
            <tr>
                <td colspan="2" style="font-size:14px; color:#000; text-align:left; padding:10px 10px;">Dear <b>{{ $name }},</b></p></td>			
            </tr>	
            <tr>
                <td colspan="2" style="font-size:14px; color:#000; text-align:left; padding:10px 10px;">{{$mailContent}}</p></td>			
            </tr>
            <tr>
                <td colspan="2" style="text-align:center;"><p style="width:140px; background:#5bac3a; padding:5px 0px; margin:0 auto 40px auto; text-align:center; color:#fff; font-size:24px; letter-spacing:4px;">{{ $otp}}</p></td>			
            </tr>
            <tr>
                <td colspan="2">
                    <p style="font-size:14px; color:#000; padding:5px 10px;">Thanks<br/><b>Tutorialspoint Team</b></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="background:#e4e4e4; text-align:center; margin:15px 0px 5px 0px; padding:5px 10px;">
                    <p style="text-align:center; color:#333;">© Copyright {{date('Y')}}. All Rights Reserved.</p>
                </td>
            </tr>
        </table>