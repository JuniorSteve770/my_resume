import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profilePic from '../images/CV_images/bberg.jpg'; 
import profilePic0 from '../images/CV_images/Csh.jpg'; 
import profilePic1 from '../images/CV_images/markovirz.JPG'; 
import profilePic2 from '../images/CV_images/ml_Python_Sql.jpg'; 
import profilePic3 from '../images/CV_images/Power_BI.jpg'; 
import profilePic4 from '../images/CV_images/python_stats.jpg'; 
import profilePic6 from '../images/CV_images/risk management.jpg'; 
import profilePic7 from '../images/CV_images/Udemy.PNG'; 





function Certifications() {
  const certifications = [
/*     {
      title: "AWS Solutions Architect Associate",
      alt: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "ABC123XYZ",
      image: "/path-to-aws-cert.png",
      verificationUrl: "https://aws.amazon.com/verify"
    }, */
    
    {
      title: "Bloomberg Terminal ",
      alt: "Csh",
      image: profilePic,
    },
    {
      title: "C# essential Concepts",
      alt: "Csh",
      image: profilePic0
    },
    {
      title: "Python for Algorithmic Trading",
      alt: "bberg",
      image: profilePic7,
    },
    {
      title: "Portofolio Optimisation with Markowitz Model",
      alt: "bberg",
      image: profilePic1,
    },
    {
      title: "PYTHON and Statistics for Financial Data Analysis",
      alt: "bberg",
      image: profilePic4,
    },
    {
      title: "Machine Learning in SQL Server using Python",
      alt: "bberg",
      image: profilePic2,
    },
    {
      title: "POWER BI Certification",
      alt: "bberg",
      image: profilePic3,
    },

    {
      title: "RISK MANAGEMENT CERTIFICATION",
      alt: "bberg",
      image: profilePic6,
    },
    {
      title: "je vous laisse l'honneur me faire des SUGGESTIONS DE CERTIFICATIONS ",
      
      alt: "bberg",
     
    },

    
    // Add more certifications here
  ];

  return (
    <section className="certifications-section py-5">
      <Container>
        <motion.h2 
          className="text-center display-4 mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Certifications
        </motion.h2>

        <Row className="g-4">
          {certifications.map((cert, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-100 certification-card border-0 shadow-sm">
                  {cert.image && (
                    <Card.Img 
                      variant="top" 
                      src={cert.image} 
                      alt={cert.alt}
                      className="p-3"
                    />
                  )}
                  <Card.Body>
                    <Card.Title className="h4 mb-3">{cert.title}</Card.Title>
{/*                <Card.Text className="mb-2">
                   <strong>Issuer:</strong> {cert.issuer}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <strong>Date:</strong> {cert.date}
                    </Card.Text>
                    <Card.Text className="mb-3">
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </Card.Text> 
                    <a 
                      href={cert.verificationUrl} 
                      className="btn btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Certificate →
                    </a>*/}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;