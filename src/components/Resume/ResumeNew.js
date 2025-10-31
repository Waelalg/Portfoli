// File: src/components/Resume/ResumeNew.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/WAEL_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pdfError, setPdfError] = useState(null);

  // update width on resize (for responsive scale)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // compute scale based on window width
  const computeScale = () => {
    if (width > 1400) return 1.8;
    if (width > 1000) return 1.5;
    if (width > 786) return 1.1;
    return 0.6;
  };

  const scale = computeScale();

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "WAEL_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setPdfError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error("Error while loading PDF:", error);
    setPdfError("Failed to load resume PDF.");
    setLoading(false);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 20 }}>
          <Button variant="primary" onClick={handleDownload} style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: 18 }}>
          <Col md={10} className="d-flex justify-content-center">
            {loading && (
              <div style={{ textAlign: "center", padding: 20 }}>
                <Spinner animation="border" role="status" />
                <div style={{ marginTop: 8, color: "#cfcbe3" }}>Loading resume...</div>
              </div>
            )}

            {pdfError && (
              <div style={{ color: "salmon", textAlign: "center", padding: 20 }}>
                {pdfError}
              </div>
            )}

            {!pdfError && (
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={null}
                noData={<div style={{ color: "#cfcbe3" }}>No resume file found.</div>}
              >
                {/* render all pages if numPages is known, otherwise render one page to avoid blank */}
                {numPages
                  ? Array.from(new Array(numPages), (el, index) => (
                      <div
                        key={`page_${index + 1}`}
                        style={{ marginBottom: 16, display: "flex", justifyContent: "center", width: "100%" }}
                      >
                        <Page
                          pageNumber={index + 1}
                          scale={scale}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </div>
                    ))
                  : (
                    <div style={{ marginBottom: 16, display: "flex", justifyContent: "center", width: "100%" }}>
                      <Page pageNumber={1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
                    </div>
                  )}
              </Document>
            )}
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 12, marginBottom: 30 }}>
          <Button variant="primary" onClick={handleDownload} style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
