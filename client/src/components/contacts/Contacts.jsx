// import MapPage from "./MapPage"

export default function Contacts() {
    return (
        <>
            <div id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Get In <strong className="black"> Toucgh</strong></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid padddd">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 padddd">
                    <div className="map_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                                    <form className="main_form">
                                        <div className="row">

                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <input className="form-control" placeholder="Name" type="text" name="Name" />
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <input className="form-control" placeholder="Email" type="text" name="Email" />
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <textarea className="textarea" placeholder="Message" type="text"
                                                    name="Message"></textarea>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <button className="send">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="map">
                            {/* < MapPage /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};