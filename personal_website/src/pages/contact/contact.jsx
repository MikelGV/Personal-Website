import "./contact.css"


export default function Contact() {
	return(
		<div className="contact">
			<div className="contactContainer">
				<h5 className="title">Send me an email</h5>
				<form className="contactForm">
					<div className="formGroup">
						<label className="labelName" for="name">Name</label>
						<input type="text" id="name" value="" required="" />
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Email</label>
						<input type="text" id="email" value="" required="" />
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Subject</label>
						<input type="text" id="subject" value="" required="" />
					</div>
					<div className="formGroup">
						<label className="labelName" for="name">Reason</label>
						<select id="reason" className="reasonClass">
							<option className="Business" selected="">Business</option>
							<option className="Software" selected="">Software</option>
							<option className="Other" selected="">Other</option>
						</select>
					</div>
					<button className="submitButton">Button</button>
				</form>
			</div>
		</div>
	)
}
