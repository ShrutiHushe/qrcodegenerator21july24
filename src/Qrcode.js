import {useState, useRef, useEffect} from "react";
import saveAs from "file-saver";

export default function Qrcode() {
  const rUrl = useRef();

  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const hUrl = (event) => {setUrl(event.target.value); }

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
  }, []);

  const gqr = (event) =>
  {
	event.preventDefault();
	if(url === "")
	{
		alert("u did not enter url");
		rUrl.current.focus();
		setQrcode("");

		return;
	}

	let res = "https://api.qrserver.com/v1/create-qr-code/?data=" + url;
	setQrcode(res);
}
  const dqr = (event) =>
  {
	event.preventDefault();
	if(qrcode === "")
	{
		alert("no qrcode found");
		return;
	}

	saveAs(qrcode, "download");
  }

  return (
    <center>
      <h1> Qr Code Generator </h1>
      <form onSubmit={gqr}>
	<label> Enter URL </label>
        <input type="text" placeholder = "enter url" onChange={hUrl} ref={rUrl} />
        <br/><br/>
        <input type="submit" value= "Generate QR Code"/>
      </form>
        <br/>
	<img src={qrcode}/>
      <form onSubmit ={dqr}>
        <input type="submit" value= "Download QR Code"/>
      </form>
    </center>
  );
}

