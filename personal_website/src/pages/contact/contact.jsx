import "./contact.css"
import emailjs from "@emailjs/browser"


export default function Contact() {

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("gmail", "template_szq401i", e.target, "user_HBjZIlwVBSfuzII49IylU")
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
	}

	return(
		<div className="contact">
			<div className="contactContainer">
				<h5 className="title">Send me an email</h5>
				<form className="contactForm" onSubmit={sendEmail}>
					<div className="formGroup">
						<label className="labelName">Name</label>
						<input type="text" id="name" name="name" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName">Email</label>
						<input type="email" id="email" name="email" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName">Subject</label>
						<input type="text" id="subject" name="subject" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName" >Reason</label>
						<select id="reason" name="reason" className="reasonClass">
							<option className="Business" name="reason" selected="">Business</option>
							<option className="Software" name="reason" selected="">Software</option>
							<option className="Other" name="reason" selected="">Other</option>
						</select>
					</div>
					<div className="formGroup">
						<label className="labelName">Message</label>
						<textarea id="message" name="message" rows="4" placeholder="..." className="form-control"></textarea>
					</div>
					<div className="formGroup">
						<button className="submitButton">Button</button>
					</div>
				</form>
			</div>
		</div>
	)
}
