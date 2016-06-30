Systemutil.Run"E:\QTPWorking\flight\app\flight4a.exe","","E:\QTPWorking\flight\app","open"
Dialog("Login").WinEdit("Agent Name:").Set DataTable("username", dtLocalSheet) @@ hightlight id_;_396884_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Password:").Set DataTable("pwd", dtLocalSheet) @@ hightlight id_;_265818_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_200336_;_script infofile_;_ZIP::ssf3.xml_;_
If Window("Flight Reservation").Exist Then
	reporter.ReportEvent micPass, "Login Test","Login Successfully"
	Window("Flight Reservation").Close
else 
	reporter.ReportEvent micFail, "Login Test","Login Failed"
End If


