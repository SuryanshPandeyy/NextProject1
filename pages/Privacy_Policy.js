import Image from "next/image";
import React from "react";
import Heads from "/components/Heads";

const DownloadBox = ({ background, color, icon }) => {
  return (
    <a
      target="blank"
      href="https://play.google.com/store/apps/details?id=com.moneyon.dreams"
      className="downloadContainer"
    >
      <div className={background ? "downloadWhiteBox" : "downloadBox"}>
        <div className="donwloadImg1">
          <Image src="/icon/play.png" alt="play_store" width={22} height={22} />
        </div>
        {icon ? (
          <div className="donwloadImg2">
            <Image
              src="/icon/play_blue.png"
              alt="play_store"
              width={22}
              height={22}
            />
          </div>
        ) : (
          <div className="donwloadImg2">
            <Image
              src="/icon/play_white.png"
              alt="play_store"
              width={22}
              height={22}
            />
          </div>
        )}
        <div>Download Now</div>
      </div>
    </a>
  );
};

const Policy = () => {
  return (
    <>
      <Heads title="Money On Dreams : Privacy Policy" />
      <div className="aboutContainer missionContainer">
        <div className="termsBox">
          <h1>Privacy and policy</h1>
          <p>
            The terms we/JMD Fintech/Website/App individually and collectively
            refer to “JMD FINTECH PRIVATE LIMITED” and the terms &quot;You&quot;
            /&quot;Your&quot; / “User”/ &quot;Yourself&quot; refer to the users.
            <br />
            <br />
            This Privacy Policy is an electronic record in the form of an
            electronic contract formed under the information Technology Act,
            2000 and the rules made thereunder and the amended provisions
            pertaining to electronic documents / records in various statutes as
            amended by the information Technology Act, 2000. This Privacy Policy
            does not require any physical, electronic or digital signature.
            <br />
            <br />
            This Privacy Policy is a legally binding document between you and
            JMD Fintech(both terms defined below). The terms of this Privacy
            Policy will be effective upon your acceptance of the same (directly
            or indirectly in electronic form, by clicking on the I accept tab or
            by use of the website or by other means) and will govern the
            relationship between you and “JMD Fintech” for your use of the
            website “www.jmdfintech.in” and app “Moneyondream” (defined below).
            <br />
            <br />
            This document is published and shall be construed in accordance with
            the provisions of the Information Technology (reasonable security
            practices and procedures and sensitive personal data of information)
            rules, 2011 under Information Technology Act, 2000; that require
            publishing of the Privacy Policy for collection, use, storage and
            transfer of sensitive personal data or information.
            <br />
            <br />
            Please read this Privacy Policy carefully by using the Website, you
            indicate that you understand, agree and consent to this Privacy
            Policy. If you do not agree with the terms of this Privacy Policy,
            please do not use this Website. By providing us your Information or
            by making use of the facilities provided by the Website, You hereby
            consent to the collection, storage, processing and transfer of any
            or all of Your Personal Information and Non-Personal Information by
            us as specified under this Privacy Policy. You further agree that
            such collection, use, storage and transfer of Your Information shall
            not cause any loss or wrongful gain to you or any other person.If
            you choose to use our Service, then you agree to the collection and
            use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
            <br />
            <br />
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at www.jmdfintech.in,
            unless otherwise defined in this Privacy Policy.
          </p>

          <p>
            <br />
            <br />
            <br />
            Information Collection and Use
            <br />
            <br />
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your name, phone number, mail id, user
            name, password, date of birth and postal address. The information
            that we collect will be used to contact or identify you.
            <br />
            All required information is service dependent and we may use the
            above said user information to, maintain, protect, and improve its
            services (including advertising services) and for developing new
            services. Such information will not be considered as sensitive if it
            is freely available and accessible in the public domain or is
            furnished under the Right to Information Act, 2005 or any other law
            for the time being in force.
            <br />
            If any user choose to buy our services from the website, the user is
            allowing us to gather the personal information of user.
            <br /> The information collected may consists of:
            <br />
            Your Personal Information including your name, age, address, email
            id, phone number, date of birth, gender, job position, occupation,
            financial information, any other sensitive personal data or
            information etc.
            <br />
            Non-personal information which may include your geographical
            location, IP address, your system details like OS version, internet
            browser & your telecom service provider etc. Information about your
            transactions with us, or previous insurers, such as your policy
            coverage, claim information, premium and payment history.
            <br />
            Other information as may be required by the insurance companies or
            provided by you on insurance applications or questionnaire.
            <br />
            <br />
          </p>
          <p>
            Log Data
            <br />
            <br />
            We want to inform you that whenever you visit our Service, we
            collect information that your browser sends to us that is called Log
            Data. This Log Data may include information such as your computer’s
            Internet Protocol (&quot;IP&quot;) address, browser version, pages
            of our Service that you visit, the time and date of your visit, the
            time spent on those pages, and other statistics.
            <br />
            <br />
          </p>
          <p>
            Cookies
            <br />
            <br />
            Cookies are files with small amount of data that is commonly used an
            anonymous unique identifier. These are sent to your browser from the
            website that you visit and are stored on your computer’s hard drive.
            Our website uses these &quot;cookies&quot; to collection information
            and to improve our Service. You have the option to either accept or
            refuse these cookies, and know when a cookie is being sent to your
            computer. If you choose to refuse our cookies, you may not be able
            to use some portions of our Service. Cookies cannot read data off
            your hard drive. Our advertisers may also assign their own cookies
            to your browser (if you click on their ads), a process that we do
            not control. We use this information to deliver our web pages to you
            upon request, to tailor our site to the interests of our users, to
            measure traffic within our site and let advertisers know the
            geographic locations from where our visitors come. Your Information
            will mostly be stored in electronic form however certain data may be
            stored in physical form.
          </p>
          <p>
            <br />
            <br />
            Purpose of Collection, Storage, Use, Processing:
            <br />
            <br />
            You authorise JMD Fintech to contact you through call, SMS, email,
            WhatsApp or any other mode in future. You hereby override your NDNC
            registration JMD Fintech collect your Information solely for the
            purpose of providing you the product or service that is connected
            with the function or activity of the JMD Fintech which includes but
            not limited to the following (&quot;Purpose&quot;):
            <br />
            <br />
            To inform you about various products and services;
            <br />
            To address your queries and resolve your concerns pertaining to any
            service or product that you were looking for;
            <br />
            To process your transactions and to provide you with transaction and
            post transaction-related services, providing, improving, and
            marketing our products and services, including site content and
            performance;
            <br />
            To send you survey and marketing communications or facilitate
            various programmes and initiatives launched either by us or third
            party which we believes may be of interest to you;
            <br /> To facilitate your usage of Website and improve our service,
            product or content on Website;
            <br /> To review Website performance and do data analysis to make
            your experience better;
            <br /> To protect the integrity of our Website; To inform you about
            change in any term and condition of this Privacy Policy or Terms of
            Use;
            <br /> To implement information security practices, to determine any
            security breaches, contaminant or computer virus, to
            investigate/prevent/take action illegal activities and suspected
            fraud;
            <br />
            and
            <br /> To perform such other functions as described to you at the
            time of collection or pursuant to your consent.
          </p>
          <p>
            <br />
            <br />
            Service Providers
            <br />
            <br />
            We may employ third-party companies and individuals due to the
            following reasons:
            <br />
            <br /> To facilitate our Service;
            <br /> To provide the Service on our behalf;
            <br /> To perform Service-related services; or
            <br /> To assist us in analyzing how our Service is used.
            <br />
            We want to inform our Service users that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>
          <p>
            <br />
            <br />
            Information Sharing <br />
            <br /> We do not disclose any non-public personal information about
            our users, customers or former customers to anyone, except:
            <br />
            <br /> As permitted by law; <br />
            Servicing your requests and facilitating your use of our Website;
            <br /> Analyze use of and improve our Website, products and
            services;
            <br />
            Identify and protect against fraudulent transactions and other
            misuses of our Website;
            <br /> and Enforce our Terms of Use.
            <br /> You acknowledge and agree that JMD Fintech may share,
            disclose, transfer or part with your Information to other entities
            depending upon the type of service or product you are looking for or
            for one or more of the permissible purposes. JMD Fintech may also
            share your personal or non-personal information where it is required
            to share the same with such other entities for providing you the
            service or product and you provide JMD Fintech, your unconditional
            consent to do the same. JMD Fintech may share statistical data
            and/or other Non-personal Information or details without your
            express or implied consent to facilitate various program or
            initiatives launched by JMD Fintech, third party service providers,
            insurance companies, partners or financial institutions, from time
            to time.
            <br />
            <br />
            We use other third parties such as a credit/debit card processing
            company, payment gateway, pre-paid cards etc. to enable you to make
            payments for buying products or availing services on Website. When
            you sign up for these services, you may have the ability to save
            your card details for future reference and faster future payments.
            In such case, we may share your relevant Information as necessary
            for the third parties to provide such services, including your name,
            residence and email address. The processing of payments or
            authorization is solely in accordance with these third parties
            policies, terms and conditions and we are not in any manner
            responsible or liable to you or any third party for any delay or
            failure at their end in processing the payments. In addition to
            this, JMD Fintech reserve the right to share your Information with
            any Government Agency or other authorized law enforcement agencies
            (LEAs) mandated under law to obtain your Information for the purpose
            of verification of identity or for prevention, detection,
            investigation including but not limited to cyber incidents,
            prosecution, and punishment of offences etc.
          </p>
          <p>
            <br />
            <br />
            Third Party Links:
            <br />
            <br /> It is clarified that while your usage to our Website, you
            might see the links to the third party website / advertisements /
            electronic communication service, which are provided by the third
            parties. As the operation of the third party is not under control
            JMD Fintech, therefore JMD Fintech does not make any endorsement /
            guarantee of any service or product offered through third party
            websites nor make any representation related to the any privacy
            policy or other policies of such third party. Any usage of such
            third party website or availing any service or product through third
            party shall be at your risk and JMD Fintech is not responsible for
            any loss / damage or otherwise. It is recommended that you should
            review the privacy policy of such third party websites prior to
            using such websites.
            <br />
          </p>
          <p>
            <br /> Security Measures:
            <br />
            <br /> JMD Fintech takes commercially reasonable security measures
            to secure your information from unauthorised access, usage or
            disclosure or alteration. For this purpose we adopt reasonable
            security practices and procedures, in line with the industry
            standard, to include, technical, operational, managerial and
            physical security controls in order to protect your personal
            information from unauthorized access, or disclosure while it is
            under our control. While we protect your Personal information as per
            industry standards, you acknowledge that the internet or computer
            networks are not fully secure and that we cannot provide any
            absolute assurance regarding the security of your Personal
            information. Therefore you acknowledge that you shall not hold
            responsible JMD Fintech in any manner whatsoever for loss of your
            information, or any other data, which you shares with us or which we
            have with us if such loss or any damage caused to you because of
            Force Majeure events. You further acknowledge that any information
            (including your personal information) transmitted to us or from your
            use of Website will therefore be at your own risk
            <br />
            <br /> It is clarified that Force Majeure events includes any event
            which is beyond the reasonable control of the JMD Fintech which may
            include but not limited to sabotage, fire, flood, explosion, acts of
            God, civil commotion, strikes or industrial action of any kind,
            riots, insurrection, war, acts of government, computer hacking,
            unauthorised access to computer, computer system or computer
            network, computer crashes, breach of security and encryption.
          </p>

          <p>
            <br />
            <br /> Update of Your Information:
            <br />
            <br /> JMD Fintech take all endeavours to update our records with
            latest information as provided by you, however if you see any
            discrepancy in your personal information you may contact to us
            through Grievance Officer to have your Information updated with
            us.You also acknowledge that all the information provided by you are
            out of your free will and in compliance with applicable laws. If we
            found that any of your Information is in non-compliance with the
            terms and conditions and Privacy policy, JMD Fintech reserves the
            right to remove your non-compliant information from its systems.
            Further, depending on the seriousness of the non-compliance, we may
            choose to discontinue some or all of the services being provided to
            you by us.
          </p>
          <p>
            <br />
            <br /> Authorization <br />
            <br />
            In purview of the Telecom Regulatory Authority of India (TRAI)
            guidelines, You hereby authorize insurance companies and its
            affiliates/partners or otherwise who are accessing the your
            Information by virtue of their association with JMD Fintech to
            communicate with you through telephone/mobile, Email, SMS or other
            modes of communication even if yours number/numbers(s) is/are
            registered in the National Do Not Call Registry (NDNC) or
            www.nccptrai.gov.in.
          </p>
          <p>
            <br />
            <br /> Changes to This Privacy Policy
            <br />
            <br /> We may update our Privacy Policy from time to time. Thus, we
            advise you to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately, after they are posted
            on this page.
          </p>
          <p>
            <br />
            <br />
            Contact Us
            <br />
            <br /> If you have any questions or suggestions about our Privacy
            Policy, do not hesitate to contact us.
          </p>
          <p>
            <br />
            <br />
            Grievance Redressal
            <br />
            <br /> Redressal Mechanism: Any complaints, abuse or concerns with
            regards to content and or comment or breach of these terms shall be
            immediately informed to the designated Grievance Officer as
            mentioned below via in writing or through email signed with the
            electronic signature to …………………………….. (&quot;Grievance
            Officer&quot;).
            <br />
            <br /> www.abc.in
            <br />
            <br />
            JMD FINTECH PRIVATE LIMITED
            <br />
            <br />
            CIN: U67190RJ2021PTC078017.
            <br />
            <br /> Registered office: KARSI MANDI KE PAAS, AMBA COLONY,
            KUCHAMAN, NAGAUR, RAJASTHAN, INDIA, 341508
            <br />
            <br />
            Email: info@moneyondream.com
            <br />
            <br /> Ph: +91-9799989693
            <br />
            <br /> We will strive to address your feedback and concerns in a
            timely and effective manner.
            <br />
            <br /> Please note that the details of the grievance officer may be
            changed by us from time to time by updating this Privacy Policy.
          </p>
        </div>
      </div>

      <div className="freeSpace"></div>
      <div className="appContainer">
        <div className="appPhone">
          <Image
            src="/image/phone2.png"
            alt="phone"
            width={299}
            height={621}
            objectFit="cover"
          />
        </div>

        <div className="appContent">
          <div className="appDots">
            <Image
              src="/icon/dots.png"
              alt="phone"
              width={178}
              height={50.62}
              objectFit="contain"
            />
          </div>
          <div className="appDetails">
            <p>App is available for free on Google Play</p>
            <p>Join the #JMDfintech</p>
            <DownloadBox />
          </div>
        </div>
      </div>
      <div
        className="freeSpace"
        style={{ height: "170px", background: "#E9E9E9" }}
      ></div>
    </>
  );
};

export default Policy;
