import "./contact.css"


export default function Contact() {
	return(
		<div className="contact">
			<div className="contactContainer">
				<h5 className="title">Send me an email</h5>
				<form className="contactForm">
					<div className="formGroup">
						<label className="labelName" for="name">Name</label>
						<input type="text" id="email" value="" required="" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Email</label>
						<input type="email" id="email" value="" required="" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Subject</label>
						<input type="text" id="subject" value="" required="" className="contactInput"/>
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Reason</label>
						<select id="reason" className="reasonClass">
							<option className="Business" selected="">Business</option>
							<option className="Software" selected="">Software</option>
							<option className="Other" selected="">Other</option>
						</select>
					</div>
					<div className="formGroup">
						<label for="message" className="labelName">Message</label>
						<textarea id="message" rows="4" placeholder="..." className="form-control"></textarea>
					</div>
					<div className="formGroup">
						<button className="submitButton">Button</button>
					</div>
				</form>
			</div>
		</div>
	)
}
