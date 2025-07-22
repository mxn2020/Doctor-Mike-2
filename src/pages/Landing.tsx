import React, { useState, useEffect } from 'react';
import { Stethoscope, Calendar, Users, Star, User, Heart, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer, Input, Textarea, Label, Select } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getServiceBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-badge-0', 'service-badge-1', 'service-badge-2', 'service-badge-3', 'service-badge-4', 'service-badge-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-blue-500" />,
      title: "Personalized Care",
      description: "Individual attention and tailored treatment plans for every patient"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Flexible Hours",
      description: "Extended hours and emergency appointments available"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Expert Team",
      description: "Board-certified physicians and supportive staff"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-500" />,
      title: "Modern Facilities",
      description: "State-of-the-art equipment and comfortable environment"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Patients", value: "5000+" },
    { label: "Success Rate", value: "98%" },
    { label: "Awards Won", value: "20+" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-green-900 to-blue-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Company logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Doctor Mike brand name"
              className="text-xl font-bold text-white"
            >
              Doctor Mike
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to services"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero Section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing the doctor"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Welcome to 
              <Span 
                devId="doctor-highlight" 
                devName="Doctor Highlight" 
                devDescription="Highlighted Doctor Mike text in gradient"
                className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                {' '}Doctor Mike
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero Section description explaining the services"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Providing expert medical care with compassion and modern technology. Book your appointment today.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero Section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-building"
                    devName="Go to Dashboard Button"
                    devDescription="Primary call-to-action button for dashboard"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Button 
                  devId="hero-request-appointment"
                  devName="Request Appointment Button"
                  devDescription="Primary call-to-action button for appointment request"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Request Appointment
                </Button>
              )}
              <Button 
                devId="hero-learn-more"
                devName="Learn More Button"
                devDescription="Secondary button to learn more"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics Section showing performance metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Choose Doctor Mike?</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive healthcare services with a patient-first approach
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Our Services</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Wide range of medical services to meet your needs
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: "General Checkup", color: "from-blue-400 to-green-400" },
              { name: "Cardiology", color: "from-green-400 to-blue-400" },
              { name: "Pediatrics", color: "from-blue-500 to-green-500" },
              { name: "Dermatology", color: "from-green-500 to-blue-500" },
              { name: "Neurology", color: "from-blue-400 to-green-500" },
              { name: "Orthopedics", color: "from-green-400 to-blue-500" }
            ].map((service, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId="noID" className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{service.name[0]}</span>
                </Div>
                <Badge 
                  devId={getServiceBadgeId(index)}
                  devName={`${service.name} Service Badge`}
                  devDescription={`Service badge for ${service.name}`}
                  className="text-gray-300 font-medium bg-transparent border-none"
                >
                  {service.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Appointment Request Section */}
      <Container componentId="appointment-request-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Request an Appointment</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Fill out the form below to request your appointment. We'll get back to you soon.
            </P>
            <form className="max-w-md mx-auto space-y-4">
              <Div devId="noID">
                <Label devId="noID" htmlFor="name">Name</Label>
                <Input devId="noID" id="name" placeholder="Your full name" />
              </Div>
              <Div devId="noID">
                <Label devId="noID" htmlFor="email">Email</Label>
                <Input devId="noID" id="email" type="email" placeholder="your@email.com" />
              </Div>
              <Div devId="noID">
                <Label devId="noID" htmlFor="phone">Phone</Label>
                <Input devId="noID" id="phone" type="tel" placeholder="Your phone number" />
              </Div>
              <Div devId="noID">
                <Label devId="noID" htmlFor="date">Preferred Date</Label>
                <Input devId="noID" id="date" type="date" />
              </Div>
              <Div devId="noID">
                <Label devId="noID" htmlFor="service">Service</Label>
                <Select devId="noID">
                  <option>General Checkup</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                </Select>
              </Div>
              <Div devId="noID">
                <Label devId="noID" htmlFor="message">Message</Label>
                <Textarea devId="noID" id="message" placeholder="Any additional information" />
              </Div>
              <Button 
                devId="submit-request"
                devName="Submit Request Button"
                devDescription="Button to submit appointment request"
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Request
              </Button>
            </form>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 Doctor Mike. Your health is our priority.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};