import { useState, useEffect } from 'react';
import { Button, Card, Title, Tag, Divider, Footer, Typewriter, Form, FormItem, Input, Notification, useForm } from 'animal-island-ui';
import NavHeader from './components/NavHeader';

export default function App() {
  const [isNight, setIsNight] = useState(false);
  const [form] = useForm();

  // Sync theme with body class
  useEffect(() => {
    if (isNight) {
      document.body.classList.add('theme-night');
    } else {
      document.body.classList.remove('theme-night');
    }
  }, [isNight]);

  const handleContactSubmit = (values: any) => {
    // Construct mailto link
    const subject = `Portfolio Contact from ${values.name}`;
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
    const mailtoUrl = `mailto:dingwei11111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show premium notification
    Notification.success({
      message: 'Opening Mail Client! ✉️',
      description: 'Opening your default mail app to send the email to Ding Wei Ker.',
      position: 'top',
    });

    // Open mailto link
    window.location.href = mailtoUrl;
    form.resetFields();
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Decorative background clouds/stars and leaves */}
      <div className="bg-decorations">
        {/* Clouds for Day */}
        <div className="cloud c1"></div>
        <div className="cloud c2"></div>
        <div className="cloud c3"></div>

        {/* Stars for Night */}
        <div className="star s1"></div>
        <div className="star s2"></div>
        <div className="star s3"></div>
        <div className="star s4"></div>
        <div className="star s5"></div>
        <div className="star s6"></div>

        {/* Falling leaves */}
        <div className="leaf-particle l1"></div>
        <div className="leaf-particle l2"></div>
        <div className="leaf-particle l3"></div>
        <div className="leaf-particle l4"></div>
      </div>

      {/* Sticky Header */}
      <NavHeader isNight={isNight} onToggleNight={setIsNight} />

      <main className="app-container" style={{ flex: 1, paddingBottom: '60px' }}>
        
        {/* Section 1: Hero */}
        <section id="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 120px)', padding: '40px 0' }}>
          <Card className="portfolio-card" color="default" style={{ maxWidth: '800px', width: '100%', padding: '40px 24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--day-grass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px',
                boxShadow: '0 8px 0 rgba(0,0,0,0.1)',
                border: '6px solid var(--day-sand)',
                animation: 'leafWiggle 4s ease-in-out infinite'
              }}>
                👨‍💻
              </div>
            </div>
            
            <Title size="large" color="app-green" style={{ marginBottom: '16px' }}>
              Ding Wei Ker
            </Title>
            
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '24px' }}>
              Software Engineer
            </h3>

            <div style={{ minHeight: '120px', margin: '20px 0', fontSize: '18px', lineHeight: '1.6', color: 'var(--text-dark)' }}>
              <Typewriter speed={40}>
                <p>
                  "Software Engineer with a proven track record in architecting scalable distributed systems and automating complex financial workflows. I bridge the gap between high-level system design and production-ready code and I'm dedicated to delivering high-performance enterprise solutions."
                </p>
              </Typewriter>
            </div>

            {/* CTA / Social Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '30px' }}>
              <a href="https://github.com/dingwei426" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button type="primary" size="large">
                  🐙 GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ding-wei-ker-82912625a/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button type="primary" size="large" className="btn-linkedin">
                  💼 LinkedIn
                </Button>
              </a>
              <a href="mailto:dingwei11111@gmail.com" style={{ textDecoration: 'none' }}>
                <Button type="dashed" size="large">
                  ✉️ Email Me
                </Button>
              </a>
            </div>
          </Card>
        </section>

        <Divider type="wave-yellow" />

        {/* Section 2: About Me */}
        <section id="about">
          <div className="section-title-wrapper">
            <Title size="middle" color="purple">👤 About Me</Title>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="portfolio-card" style={{ maxWidth: '800px', width: '100%', padding: '30px' }}>
              <div className="card-content-wrapper">
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                  Hello! I'm <strong>Ding Wei</strong>. I am a passionate Software Engineer who specializes in building robust distributed backends, scalable multi-tenant architectures, and automated business logic. 
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                  I bridge the gap between abstract design principles and high-performance, production-ready code. Dedicated to enterprise solutions, my ultimate goal is to create software that simplifies complex workflows while maintaining absolute accuracy, stability, and high performance.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                  <span>Currently located in Malaysia</span>
                  <span className="leaf-decor"></span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Divider type="dashed-brown" />

        {/* Section 3: Education */}
        <section id="education">
          <div className="section-title-wrapper">
            <Title size="middle" color="app-orange">🎓 Education</Title>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="portfolio-card" style={{ maxWidth: '800px', width: '100%', padding: '30px' }}>
              <div className="card-content-wrapper">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>
                      Bachelor of Software Engineering (Honours)
                    </h3>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)' }}>
                      Universiti Tunku Abdul Rahman (UTAR)
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Tag color="app-teal" size="large">CGPA 3.82 / 4.00</Tag>
                    <p style={{ fontSize: '14px', marginTop: '4px', color: 'var(--text)' }}>2022 – 2025</p>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>
                    🏅 Honors & Awards
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <Tag color="app-yellow" variant="solid">📚 UTAR Book Prize</Tag>
                    <Tag color="app-pink" variant="solid">⭐ 100% Top Achiever Scholarship (Degree)</Tag>
                    <Tag color="app-blue" variant="solid">✨ 50% Top Achiever Scholarship (Foundation)</Tag>
                    <Tag color="purple" variant="outlined">📜 President's List: May '23, Jan '24</Tag>
                    <Tag color="warm-peach-pink" variant="outlined">📋 Dean's List: Jun '22, Oct '22, Jan '23, Oct '23</Tag>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Divider type="dashed-teal" />

        {/* Section 4: Skills */}
        <section id="skills">
          <div className="section-title-wrapper">
            <Title size="middle" color="app-blue">🛠 Skills & Expertises</Title>
          </div>
          <div className="skills-grid">
            <Card className="portfolio-card" color="default" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>⚙️ Backend Development</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="app-blue">Go</Tag>
                <Tag color="app-blue">Java</Tag>
                <Tag color="app-blue">Python</Tag>
                <Tag color="app-blue">REST APIs</Tag>
              </div>
            </Card>
            
            <Card className="portfolio-card" color="default" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>🌐 Distributed Systems</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="purple">Distributed Systems</Tag>
                <Tag color="purple">NATS</Tag>
                <Tag color="purple">Multi-tenant Architectures</Tag>
              </div>
            </Card>

            <Card className="portfolio-card" color="default" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>🎨 Frontend & UI/UX</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="app-pink">React</Tag>
                <Tag color="app-pink">TypeScript</Tag>
                <Tag color="app-pink">Figma</Tag>
                <Tag color="app-pink">UI/UX Design</Tag>
              </div>
            </Card>

            <Card className="portfolio-card" color="default" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>📊 Data Science</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="lime-green">Machine Learning</Tag>
                <Tag color="lime-green">Predictive Models</Tag>
                <Tag color="lime-green">Flask Integration</Tag>
              </div>
            </Card>

            <Card className="portfolio-card" color="default" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>💾 Databases</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="app-orange">PostgreSQL</Tag>
                <Tag color="app-orange">Firebird</Tag>
                <Tag color="app-orange">Database Isolation</Tag>
              </div>
            </Card>
          </div>
        </section>

        <Divider type="wave-yellow" />

        {/* Section 5: Experience */}
        <section id="experience">
          <div className="section-title-wrapper">
            <Title size="middle" color="app-green">💼 Work Experience</Title>
          </div>
          
          <div className="timeline">
            {/* Job 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <Card className="portfolio-card" color="default" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>
                      Project Lead — Asset Management System
                    </h3>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)' }}>
                      E Stream Software Sdn Bhd
                    </p>
                  </div>
                  <Tag color="app-green">2026 – Present</Tag>
                </div>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-dark)' }}>
                  <li>Managed full system lifecycle, translating Figma designs into a Go (Echo) + React TS production app.</li>
                  <li>Engineered automated Capital Allowances/depreciation logic with 100% accuracy in tax computation.</li>
                  <li>Built an allocation module tracking asset movement and employee assignments for real-time inventory visibility.</li>
                </ul>
              </Card>
            </div>

            {/* Job 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <Card className="portfolio-card" color="default" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>
                      Programmer — X-Store
                    </h3>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)' }}>
                      E Stream Software Sdn Bhd
                    </p>
                  </div>
                  <Tag color="app-blue">2024 – 2026</Tag>
                </div>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-dark)' }}>
                  <li>Architected a multi-tenant distributed system using NATS with database-per-tenant isolation.</li>
                  <li>Designed scalable database schemas for high-volume enterprise workloads.</li>
                  <li>Built RESTful API integrations syncing multi-channel e-commerce orders, products, and stock.</li>
                  <li>Automated financial workflows in Go, posting e-commerce invoices into the SQL Accounting System.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <Divider type="dashed-brown" />

        {/* Section 6: Projects */}
        <section id="projects">
          <div className="section-title-wrapper">
            <Title size="middle" color="warm-peach-pink">📂 Featured Projects</Title>
          </div>
          
          <div className="projects-grid">
            <Card className="portfolio-card" color="default" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="card-content-wrapper">
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Student Grades and CGPA Prediction
                </h3>
                <Tag color="lime-green" size="small" style={{ marginBottom: '12px' }}>React + Flask + ML</Tag>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-dark)' }}>
                  Full-stack platform using machine learning to forecast academic performance, featuring an AI recommendation engine for personalized study plans. Created at UTAR, 2024–2025.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Button type="default" disabled block>
                  Private Repository
                </Button>
              </div>
            </Card>

            <Card className="portfolio-card" color="default" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="card-content-wrapper">
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Tastier
                </h3>
                <Tag color="app-pink" size="small" style={{ marginBottom: '12px' }}>Mobile Application</Tag>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-dark)' }}>
                  A mobile app designed for sharing, saving, and modifying recipes, offering interactive community components. UTAR, 01/2023–05/2023.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Button type="default" disabled block>
                  Academic Work
                </Button>
              </div>
            </Card>

            <Card className="portfolio-card" color="default" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="card-content-wrapper">
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Recipe Management System
                </h3>
                <Tag color="app-orange" size="small" style={{ marginBottom: '12px' }}>Full-Stack Web App</Tag>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-dark)' }}>
                  A system built to help restaurants digitize, standardize, and scale recipe instructions and cataloging. UTAR, 10/2023–12/2023.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="https://github.com/dingwei426/Recipe-Manager" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button type="primary" block>
                    🐙 View on GitHub
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </section>

        <Divider type="wave-yellow" />

        {/* Section 7: Contact */}
        <section id="contact">
          <div className="section-title-wrapper">
            <Title size="middle" color="app-teal">✉️ Say Hello!</Title>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="portfolio-card" color="default" style={{ maxWidth: '600px', width: '100%', padding: '30px' }}>
              <p style={{ textAlign: 'center', marginBottom: '24px', fontSize: '16px', color: 'var(--text-dark)' }}>
                Have an inquiry or want to work together? Leave a message below, and it will open in your email client!
              </p>

              <Form
                form={form}
                initialValues={{ name: '', email: '', message: '' }}
                layout="vertical"
                onFinish={handleContactSubmit}
              >
                <FormItem
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input placeholder="Your Name" allowClear />
                </FormItem>

                <FormItem
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email address!' }
                  ]}
                >
                  <Input placeholder="you@example.com" allowClear />
                </FormItem>

                <FormItem
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please write a message!' }]}
                >
                  <Input placeholder="Your cozy message..." allowClear />
                </FormItem>

                <div style={{ marginTop: '24px' }}>
                  <Button type="primary" htmlType="submit" block size="large">
                    🍃 Send Letter
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer type="tree" seamless />
    </div>
  );
}
