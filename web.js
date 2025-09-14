import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

// Default export React component. TailwindCSS expected to be configured in the project.
// Required libs: react-router-dom, recharts

const LOGO = "https://static.vecteezy.com/system/resources/previews/007/688/840/non_2x/education-logo-free-vector.jpg";
const HOME_BG = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Home hero
const LOGIN_BG_STUDENT = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Student login
const LOGIN_BG_FACULTY = "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Faculty login

const primary = "#0b74de";

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Logo" className="h-10 w-10 rounded-md object-cover" />
            <div>
              <Link to="/" className="text-lg font-semibold text-gray-800">Empowering Students</Link>
              <div className="text-xs text-gray-500">Enabling Institutions</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/student-login">Student Login</NavLink>
            <NavLink to="/faculty-login">Faculty Login</NavLink>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/register" className="ml-2 px-3 py-1 rounded bg-blue-500 text-white">Register</NavLink>
          </nav>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children, className = "" }) {
  return (
    <Link to={to} className={`text-sm text-gray-700 hover:text-blue-600 ${className}`}>
      {children}
    </Link>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md bg-gray-100"
        aria-label="menu"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow p-3 flex flex-col gap-2">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/student-login" onClick={() => setOpen(false)}>Student Login</Link>
          <Link to="/faculty-login" onClick={() => setOpen(false)}>Faculty Login</Link>
          <Link to="/reports" onClick={() => setOpen(false)}>Reports</Link>
          <Link to="/help" onClick={() => setOpen(false)}>Help</Link>
          <Link to="/register" onClick={() => setOpen(false)} className="mt-2 px-3 py-1 rounded bg-blue-500 text-white text-center">Register</Link>
        </div>
      )}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11,116,222,0.08), rgba(255,255,255,0.02)), url('${HOME_BG}')`,
        }}
      >
        <div className="max-w-7xl mx-auto py-20 px-6 sm:px-8 lg:px-12">
          <div className="bg-white/75 backdrop-blur-md rounded-xl p-8 md:p-12 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Empowering Students, Enabling Institutions</h1>
            <p className="mt-4 text-gray-700">A unified digital platform to track, validate, and celebrate student achievements across Higher Education Institutions in Jammu &amp; Kashmir.</p>
            <div className="mt-6 flex gap-4">
              <button onClick={() => navigate('/register')} className="px-4 py-2 rounded shadow text-white bg-blue-600">Register</button>
              <a href="#services" className="px-4 py-2 rounded border border-gray-300 text-gray-700">Know More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <h2 className="text-2xl font-semibold">Core Services</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((s) => (
            <div key={s.title} className="p-4 rounded-lg border bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex items-center justify-center rounded bg-blue-50 text-blue-600">{s.icon}</div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const servicesData = [
  {
    title: "Student Activity Tracker",
    desc: "Track participation, achievements and certifications in one place.",
    icon: "🎯",
  },
  { title: "Faculty Validation Portal", desc: "Approve and validate student records quickly.", icon: "🧑‍🏫" },
  { title: "Analytics Dashboard", desc: "Visualize performance and participation trends.", icon: "📊" },
  { title: "Document Upload & Verification", desc: "Secure upload and tamper-evident verification.", icon: "📁" },
  { title: "Event & Deadline Alerts", desc: "Keep students and staff informed with reminders.", icon: "⏰" },
  { title: "Reports & Analytics", desc: "Downloadable institutional and departmental reports.", icon: "📈" },
  { title: "Institutional Data Management", desc: "Manage departments, courses and staff centrally.", icon: "🏛️" },
  { title: "Feedback & Support System", desc: "Collect feedback and manage tickets.", icon: "💬" },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">About the Platform</h2>
      <p className="mt-4 text-gray-700">This platform provides a centralized, secure and privacy-focused solution for Higher Education Institutions in Jammu & Kashmir to track student activities, validate achievements, and generate actionable analytics. Built with scalability and inclusivity in mind, it enables institutions to adopt data-driven decisions while respecting privacy and accessibility.</p>

      <h3 className="mt-6 font-semibold">Benefits</h3>
      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside list-disc text-gray-700">
        <li>Centralized tracking</li>
        <li>Secure validation</li>
        <li>Analytics</li>
        <li>Scalability</li>
        <li>Data privacy</li>
        <li>Inclusivity</li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded shadow-sm flex gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded bg-blue-50 text-blue-600 text-xl">{s.icon}</div>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Login({ type = "student" }) {
  const bg = type === "student" ? LOGIN_BG_STUDENT : LOGIN_BG_FACULTY;
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(3,7,18,0.55), rgba(3,7,18,0.4)), url('${bg}')`, backgroundSize: 'cover' }}
    >
      <div className="bg-white/90 p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{type === 'student' ? 'Student Login' : 'Faculty Login'}</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">{type === 'student' ? 'Student ID' : 'Faculty ID'}</label>
            <input className="w-full mt-1 p-2 border rounded" placeholder={type === 'student' ? 'S123456' : 'F12345'} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input type="password" className="w-full mt-1 p-2 border rounded" placeholder="••••••" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Captcha (type 1234)</label>
            <input className="w-full mt-1 p-2 border rounded" placeholder="1234" />
          </div>
          <div className="flex items-center justify-between">
            <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white">Submit</button>
            <a href="#" className="text-sm text-gray-600">Forgot?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

const participationData = [
  { name: 'Sem 1', participation: 120, outcomes: 40 },
  { name: 'Sem 2', participation: 200, outcomes: 80 },
  { name: 'Sem 3', participation: 150, outcomes: 60 },
  { name: 'Sem 4', participation: 250, outcomes: 120 },
];

const pieData = [
  { name: 'Academic', value: 400 },
  { name: 'Sports', value: 300 },
  { name: 'Clubs', value: 300 },
  { name: 'Volunteering', value: 200 },
];

function Reports() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-white rounded shadow-sm">
        <h3 className="font-semibold">Participation (by semester)</h3>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <BarChart data={participationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="participation" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow-sm">
        <h3 className="font-semibold">Participation by Type</h3>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow-sm md:col-span-2">
        <h3 className="font-semibold">Outcomes Trend</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={participationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="outcomes" stroke={primary} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Help() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">Help & Support</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Getting Started</h3>
          <p className="text-gray-600 mt-2">Register your institution and set up departments, courses and staff.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">FAQs</h3>
          <p className="text-gray-600 mt-2">Common questions and how to resolve them.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Technical Support</h3>
          <p className="text-gray-600 mt-2">Contact our technical team via support@example.com or call +91-XXXX-XXXXX.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="font-semibold">Live Chat</h3>
          <button className="mt-2 px-4 py-2 rounded bg-blue-600 text-white">Start Chat (dummy)</button>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded shadow-sm">
        <h3 className="font-semibold">Accessibility</h3>
        <p className="text-gray-600 mt-2">This site aims to be accessible: clear headings, large tap targets, and high contrast.</p>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Register</h2>
        <p className="text-gray-600 mt-2">Register your institution or create a student account.</p>
        <form className="mt-4 grid grid-cols-1 gap-3">
          <input className="p-2 border rounded" placeholder="Full name / Institution name" />
          <input className="p-2 border rounded" placeholder="Email" />
          <input className="p-2 border rounded" placeholder="Phone" />
          <button className="px-4 py-2 rounded bg-blue-600 text-white">Create Account</button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <img src={LOGO} alt="logo" className="h-12 w-12" />
          <p className="text-sm text-gray-600 mt-2">Contact: info@example.com | +91-XXXXXXXXXX</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="text-sm text-gray-600 mt-2">
              <li><Link to="/help">Help</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">Developed under Smart India Hackathon (SIH25093) by the Government of Jammu &amp; Kashmir.</div>
    </footer>
  );
}

function FloatingChat() {
  return (
    <a href="#" className="fixed right-4 bottom-4 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50">
      💬 Chat with Us — Support
    </a>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/student-login" element={<Login type="student" />} />
            <Route path="/faculty-login" element={<Login type="faculty" />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/help" element={<Help />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        <Footer />
        <FloatingChat />
      </div>
    </Router>
  );
}
