const TermsPage = () => {
    return (
      <div className="flex flex-col md:flex-row min-h-screen px-4 pt-20 -mb-10">
        <div className="flex flex-col justify-center items-center w-full mt-4 z-10">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mt-2 tracking-widest uppercase"
          >
            Terms of Service
          </h1>
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80 mb-6">
            These are the terms of service
          </p>
          <div className="text-white max-w-7xl text-[17px] leading-relaxed space-y-4 px-4 mt-5">
            <p>
              At NIBMTix, we’re transforming how events are managed at NIBM. Our innovative digital ticketing platform offers seamless, efficient, and eco-friendly solutions for all your event needs. Say goodbye to manual ticketing hassles and hello to effortless event experiences.
            </p>
            <h2 className="text-3xl font-semibold mt-6">General Terms</h2>
            <p>
              By using our platform, you agree to abide by the following terms and conditions. NIBMTix reserves the right to update these terms at any time without prior notice. Users are encouraged to review the terms regularly to ensure they are aware of any changes.
            </p>
            <h2 className="text-3xl font-semibold mt-6">Usage of the Platform</h2>
            <p>
              NIBMTix is designed for the purpose of facilitating event management at NIBM. Users must not engage in activities that disrupt the functionality of the platform or violate the rights of other users.
            </p>
            <h2 className="text-3xl font-semibold mt-6">Ticket Policies</h2>
            <p>
              Tickets purchased through NIBMTix are subject to the event&apos;s terms and conditions. Refunds and transfers are handled by the event organizers, and NIBMTix holds no responsibility for any disputes related to tickets.
            </p>
            <h2 className="text-3xl font-semibold mt-6">Privacy Policy</h2>
            <p>
              NIBMTix values your privacy. Personal data collected through our platform will be used solely for the purpose of event management and will not be shared with third parties without user consent.
            </p>
            <h2 className="text-3xl font-semibold mt-6">Limitation of Liability</h2>
            <p>
              NIBMTix is not responsible for any damages or losses that may arise from the use of the platform. Users acknowledge that they are using the platform at their own risk.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsPage;