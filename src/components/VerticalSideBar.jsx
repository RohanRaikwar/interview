import {
    Gift,
    Home,
    Backpack,
    Swords,
    Crown,
    Users,
    Megaphone,
    Mail,
    HelpCircle,
    FileText,
    Twitter,
    Instagram,
    Music2,
    Youtube,
  } from "lucide-react"
  import './VerticalSideBar.css'
  
  export default function VerticalSidebar() {
    return (
      <div className="sidebar-container">
        <nav className="sidebar">
          <div className="sidebar-top">
            <div className="nav-item active">
              <Gift className="icon" />
              <span className="free-tag">Free</span>
            </div>
  
            <div className="nav-item">
              <Home className="icon" />
            </div>
  
            <div className="nav-item">
              <Backpack className="icon" />
            </div>
  
            <div className="nav-item">
              <Swords className="icon" />
            </div>
  
            <div className="nav-item">
              <Crown className="icon" />
            </div>
  
            <div className="nav-item">
              <Users className="icon" />
            </div>
          </div>
  
          <div className="sidebar-middle">
            <div className="nav-item">
              <Megaphone className="icon" />
            </div>
  
            <div className="nav-item">
              <Mail className="icon" />
            </div>
  
            <div className="nav-item">
              <HelpCircle className="icon" />
            </div>
  
            <div className="nav-item">
              <FileText className="icon" />
            </div>
          </div>
  
          <div className="sidebar-bottom">
            <div className="nav-item">
              <Twitter className="icon" />
            </div>
  
            <div className="nav-item">
              <Instagram className="icon" />
            </div>
  
            <div className="nav-item">
              <Music2 className="icon" />
            </div>
  
            <div className="nav-item">
              <Youtube className="icon" />
            </div>
          </div>
        </nav>
      </div>
    )
  }
  
  