import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <MDBFooter
      className={styles.parent}
      bgColor="light"
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Niala insurance
              </h6>
              <p>
                Be safe and worry less, we insure your devices from anything
                worse. start being safe today if you are not a member already.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Downloads</h6>
              <p>
                <a href="#!" className="text-reset">
                  Windows
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Android
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Iphones and ipads
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mac
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Protection House, Mickey Leland Street
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                nisco@nyalainsurancesc.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +2511 1662 6679
              </p>
              <p>
                <MDBIcon icon=" " className="me-3" /> +2511 1662 66780
              </p>
              <p>
                <MDBIcon icon=" " className="me-3" /> +2511 1662 66776
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2022.
        <a className="text-reset fw-bold" href="#">
          Nyala Insurance S.C.
        </a>
      </div>
    </MDBFooter>
  );
}
