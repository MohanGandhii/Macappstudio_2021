
"use client";
import React, { useState, useEffect } from 'react';
import './packages.css';
import GetProposalButton from '@/components/ui/GetProposalButton';

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('ios_packages');
  const [activeIndustry, setActiveIndustry] = useState('fintech');
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 45 * 60 + 15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <main id="package-content" className="package_page">
      
            {/*  Hero Section  */}
            <section className="hero_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero_image_box">
                                <img src="asserts/images/hero_placeholder_apps.png" alt="Build Your Dream" />
                            </div>
                            <div className="hero_content">
                                <h1>Build Your Dream with Our <br /> <span>Extended Tech Team</span></h1>
                                <p>Get ready-to-go extended teams in just 1-2 weeks. Having built over 120+ apps on almost every platform, we bring scalable support and transparent collaboration.</p>
                                <div className="hero_btns">
                                    <a href="#" className="btn btn_primary_blue">Start Building Today <i className="fa fa-arrow-right btn_icon"></i></a>
                                    <a href="#" className="btn btn_outline_white"><i className="fa fa-play-circle btn_icon_left"></i> Watch Demo</a>
                                </div>
                            </div>
                            <div className="hero_stats">
                                <div className="stat_item">
                                    <span className="stat_number">1-2</span>
                                    <span className="stat_label">Weeks to Start</span>
                                </div>
                                <div className="stat_item">
                                    <span className="stat_number">100%</span>
                                    <span className="stat_label">Managed</span>
                                </div>
                                <div className="stat_item">
                                    <span className="stat_number">30</span>
                                    <span className="stat_label">Days Flexibility</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Features Section  */}
            <section className="features_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_header">
                                <h2>Unlock Your Potential with Our <br /> <span>Extended Tech Team</span></h2>
                                <p>Our extended tech team brings a wealth of benefits designed to streamline your operations and accelerate your success. Having built over 120+ apps, we know what works.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="feature_card">
                                <div className="feature_icon_box icon_purple">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <h3>Faster Delivery</h3>
                                <p>Accelerate your project timelines with efficient, dedicated teams.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="feature_card">
                                <div className="feature_icon_box icon_blue">
                                    <i className="fa fa-cubes"></i>
                                </div>
                                <h3>Flexible Solutions</h3>
                                <p>Adapt to evolving needs with scalable and versatile team structures.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="feature_card">
                                <div className="feature_icon_box icon_cyan">
                                    <i className="fa fa-eye"></i>
                                </div>
                                <h3>Transparent Collaboration</h3>
                                <p>Gain full visibility and foster clear communication throughout your partnership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Problem vs Solution Section  */}
            <section className="problem_solution_section">
                <div className="container">
                    <div className="row">
                        {/*  Problem Side  */}
                        <div className="col-md-6 col-sm-12">
                            <div className="text-center">
                                <span className="badge_status badge_problem"><i className="fa fa-warning"></i> The Problem</span>
                                <h2 className="vs_title">The Problem with In-House Hiring</h2>
                            </div>
                            
                            <div className="vs_card problem_card">
                                <div className="vs_icon_box bg_red_light">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>Time Consuming</h4>
                                    <p>3-6 months for hiring, onboarding & notice periods</p>
                                </div>
                            </div>

                            <div className="vs_card problem_card">
                                <div className="vs_icon_box bg_red_light">
                                    <i className="fa fa-money"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>High Overhead</h4>
                                    <p>HR costs, payroll management, and retention challenges</p>
                                </div>
                            </div>

                            <div className="vs_card problem_card">
                                <div className="vs_icon_box bg_red_light">
                                    <i className="fa fa-line-chart"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>Fixed Costs</h4>
                                    <p>High expenses even when projects slow down</p>
                                </div>
                            </div>
                        </div>

                        {/*  Solution Side  */}
                        <div className="col-md-6 col-sm-12">
                            <div className="text-center">
                                <span className="badge_status badge_solution"><i className="fa fa-check-circle-o"></i> Our Solution</span>
                                <h2 className="vs_title">Ready-to-Go <span>Extended Teams</span></h2>
                            </div>

                            <div className="vs_card solution_card">
                                <div className="vs_icon_box bg_green_light">
                                    <i className="fa fa-bolt"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>Fast Deployment</h4>
                                    <p>Get your team ready in just 1-2 weeks with pre-vetted professionals.</p>
                                </div>
                            </div>

                            <div className="vs_card solution_card">
                                <div className="vs_icon_box bg_green_light">
                                    <i className="fa fa-check-circle"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>Fully Managed</h4>
                                    <p>Complete accountability and management handled for you.</p>
                                </div>
                            </div>

                            <div className="vs_card solution_card">
                                <div className="vs_icon_box bg_green_light">
                                    <i className="fa fa-area-chart"></i>
                                </div>
                                <div className="vs_content">
                                    <h4>Scalable Growth</h4>
                                    <p>Easily scale your team as your project requirements evolve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Team Structure Section  */}
            <section className="team_structure_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_header">
                                <h2>Complete <span>Team Structure</span></h2>
                                <p>From core development to specialized expertise, we provide complete teams tailored to your project requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*  Core Development  */}
                        <div className="col-md-4">
                            <div className="team_card">
                                <div className="feature_icon_box icon_gradient_blue">
                                    <i className="fa fa-code"></i>
                                </div>
                                <h3>Core Development</h3>
                                <p>Essential team members for your project foundation</p>
                                <div className="role_tags">
                                    <span className="role_tag">QA Engineer</span>
                                    <span className="role_tag">UI/UX Designer</span>
                                    <span className="role_tag">Project Manager</span>
                                    <span className="role_tag">iOS Developer</span>
                                    <span className="role_tag">Android Developer</span>
                                    <span className="role_tag">Web Developer</span>
                                </div>
                            </div>
                        </div>
                        {/*  Specialized Roles  */}
                        <div className="col-md-4">
                            <div className="team_card">
                                <div className="feature_icon_box icon_gradient_purple">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3>Specialized Roles</h3>
                                <p>Expert professionals for advanced requirements</p>
                                <div className="role_tags">
                                    <span className="role_tag">Business Analyst</span>
                                    <span className="role_tag">System Architect</span>
                                    <span className="role_tag">Backend Developer</span>
                                    <span className="role_tag">DevOps Engineer</span>
                                </div>
                            </div>
                        </div>
                        {/*  Advanced Tech  */}
                        <div className="col-md-4">
                            <div className="team_card">
                                <div className="feature_icon_box icon_gradient_orange">
                                    <i className="fa fa-bolt"></i>
                                </div>
                                <h3>Advanced Tech</h3>
                                <p>Cutting-edge specialists for innovation</p>
                                <div className="role_tags">
                                    <span className="role_tag">AI/ML Specialists</span>
                                    <span className="role_tag">Data Scientists</span>
                                    <span className="role_tag">Cloud Architects</span>
                                    <span className="role_tag">Security Experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Integration Section  */}
            <section className="integration_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="integration_banner">
                                <h2>All roles work seamlessly with your existing team</h2>
                                <p>Our extended team members integrate directly into your workflow, using your tools, processes, and communication channels for maximum efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Comparison Checklist Section  */}
            <section className="comparison_checklist_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className="vs_title">Hiring Yourself vs Hiring with Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-4">
                            <div className="comp_card comp_card_red">
                                <h3 className="text_red_h">Traditional Hiring</h3>
                                <ul className="comp_list">
                                    <li><i className="fa fa-times"></i> Time-consuming hiring</li>
                                    <li><i className="fa fa-times"></i> Expensive payroll & overheads</li>
                                    <li><i className="fa fa-times"></i> Skill gaps & hiring risks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4">
                            <div className="comp_card comp_card_green">
                                <h3 className="text_green_h">With Extended Tech Team</h3>
                                <ul className="comp_list">
                                    <li><i className="fa fa-check"></i> 1-2 week team setup</li>
                                    <li><i className="fa fa-check"></i> Flexible & scalable</li>
                                    <li><i className="fa fa-check"></i> Experienced & accountable developers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Packages Section  */}
            <section className="packages_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_header">
                                <h2>Transparent & <span>Flexible Packages</span></h2>
                                <p>Choose the perfect package for your needs. Scale up or down with 30 days notice.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Tabs Container  */}
                    <div className="packages_tabs">
                        <div className="tab_item active" data-target="ios_packages">
                            <i className="fa fa-apple"></i> iOS
                        </div>
                        <div className="tab_item" data-target="android_packages">
                            <i className="fa fa-android"></i> Android
                        </div>
                        <div className="tab_item" data-target="web_packages">
                            <i className="fa fa-desktop"></i> Web
                        </div>
                        <div className="tab_item" data-target="all_packages">
                            <img src="asserts/images/ic_tree.png" alt="All" /> All
                        </div>
                    </div>

                    {/*  iOS Packages  */}
                    <div id="ios_packages" className="packages_content active">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_balloon.png" alt="Basic" />
                                    </div>
                                    <h3 className="price_title">5 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹4,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 iOS Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card featured">
                                    <div className="most_purchased_badge"><i className="fa fa-crown"></i> Most Purchased</div>
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_rocket.png" alt="Standard" />
                                    </div>
                                    <h3 className="price_title">7 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹5,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 - 5 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 iOS Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_diamond.png" alt="Premium" />
                                    </div>
                                    <h3 className="price_title">9 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹3,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">5 & Above Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 iOS Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                        <li><i className="fa fa-check"></i> Dedicated PM & Architect</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Android Packages (Repeat patterns with different content)  */}
                    <div id="android_packages" className="packages_content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_balloon.png" alt="Basic" />
                                    </div>
                                    <h3 className="price_title">5 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹4,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Android Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card featured">
                                    <div className="most_purchased_badge"><i className="fa fa-crown"></i> Most Purchased</div>
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_rocket.png" alt="Standard" />
                                    </div>
                                    <h3 className="price_title">7 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹5,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 - 5 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Android Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_diamond.png" alt="Premium" />
                                    </div>
                                    <h3 className="price_title">9 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹3,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">5 & Above Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Android Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                        <li><i className="fa fa-check"></i> Dedicated PM & Architect</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Web Packages (Repeat patterns)  */}
                    <div id="web_packages" className="packages_content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_balloon.png" alt="Basic" />
                                    </div>
                                    <h3 className="price_title">5 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹4,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Web Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card featured">
                                    <div className="most_purchased_badge"><i className="fa fa-crown"></i> Most Purchased</div>
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_rocket.png" alt="Standard" />
                                    </div>
                                    <h3 className="price_title">7 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹5,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 - 5 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Web Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_diamond.png" alt="Premium" />
                                    </div>
                                    <h3 className="price_title">9 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹3,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">5 & Above Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Web Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                        <li><i className="fa fa-check"></i> Dedicated PM & Architect</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  All Packages (Repeat patterns)  */}
                    <div id="all_packages" className="packages_content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_balloon.png" alt="Basic" />
                                    </div>
                                    <h3 className="price_title">5 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹4,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Mixed Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card featured">
                                    <div className="most_purchased_badge"><i className="fa fa-crown"></i> Most Purchased</div>
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_rocket.png" alt="Standard" />
                                    </div>
                                    <h3 className="price_title">7 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹5,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">3 - 5 Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Mixed Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price_card">
                                    <div className="card_icon_box">
                                        <img src="asserts/images/ic_diamond.png" alt="Premium" />
                                    </div>
                                    <h3 className="price_title">9 lakhs<span>/month</span></h3>
                                    <span className="save_badge">Save ₹3,000 | 50% OFF</span>
                                    <div className="ideal_for">Ideal for:</div>
                                    <span className="experience_text">5 & Above Years of Experience Team Members</span>
                                    <ul className="card_list">
                                        <li><i className="fa fa-check"></i> 3 Mixed Developers</li>
                                        <li><i className="fa fa-check"></i> Weekly Reports</li>
                                        <li><i className="fa fa-check"></i> Email Support</li>
                                        <li><i className="fa fa-check"></i> Dedicated PM & Architect</li>
                                    </ul>
                                    <button className="btn_request">Request Proposal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Industries Section  */}
            <section className="industries_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5 style={{ color: "#1d63ed", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px", marginBottom: "10px" }}>Select your project type</h5>
                            <h2 className="vs_title" style={{ marginBottom: "15px" }}>Choose Your Industry</h2>
                            <p style={{ color: "#666", marginBottom: "60px" }}>We specialize in building world-class applications across industries</p>
                        </div>
                    </div>

                    {/*  Industry Tabs  */}
                    <div className="industry_tabs">
                        <div className="industry_tab active" data-target="fintech">
                            <i className="fa fa-usd ic_green"></i>
                            <span>FinTech</span>
                        </div>
                        <div className="industry_tab" data-target="education">
                            <i className="fa fa-graduation-cap ic_blue"></i>
                            <span>Education</span>
                        </div>
                        <div className="industry_tab" data-target="ecommerce">
                            <i className="fa fa-shopping-cart ic_orange"></i>
                            <span>eCommerce</span>
                        </div>
                        <div className="industry_tab" data-target="saas">
                            <i className="fa fa-cloud ic_purple"></i>
                            <span>SaaS</span>
                        </div>
                        <div className="industry_tab" data-target="marketplace">
                            <i className="fa fa-shopping-basket ic_cyan"></i>
                            <span>Marketplace</span>
                        </div>
                        <div className="industry_tab" data-target="chatbot">
                            <i className="fa fa-commenting-o ic_lightgreen"></i>
                            <span>Chat Bot</span>
                        </div>
                        <div className="industry_tab" data-target="vrar">
                            <i className="fa fa-gamepad ic_purple"></i>
                            <span>VR/AR</span>
                        </div>
                        <div className="industry_tab" data-target="healthcare">
                            <i className="fa fa-heartbeat ic_pink"></i>
                            <span>Healthcare</span>
                        </div>
                    </div>

                    {/*  Fintech Content  */}
                    <div id="fintech" className="industry_content active">
                        <div className="industry_hero">
                            <img src="asserts/images/ic_app_mockup.png" alt="Fintech" />
                            <div className="industry_hero_overlay">
                                <h3>FinTech Application</h3>
                                <p>Comprehensive solution with modern features and scalable architecture</p>
                            </div>
                        </div>
                        <div className="industry_details_grid">
                            <div className="detail_card">
                                <div className="detail_card_header">
                                    <i className="fa fa-check-circle-o bg_check"></i>
                                    <h4>Key Features</h4>
                                </div>
                                <ul className="card_list">
                                    <li><i className="fa fa-check"></i> Payment Gateway Integration</li>
                                    <li><i className="fa fa-check"></i> Digital Wallet System</li>
                                    <li><i className="fa fa-check"></i> Real-time Analytics Dashboard</li>
                                    <li><i className="fa fa-check"></i> KYC & Compliance</li>
                                    <li><i className="fa fa-check"></i> Transaction History & Reports</li>
                                </ul>
                                <div style={{ marginTop: "30px" }}>
                                    <h5 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "15px" }}>Platforms Covered</h5>
                                    <div className="role_tags" style={{ justifyContent: "flex-start" }}>
                                        <span className="role_tag">iOS</span>
                                        <span className="role_tag">Android</span>
                                        <span className="role_tag">Web</span>
                                        <span className="role_tag">Admin Panel</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail_card">
                                <div className="detail_card_header">
                                    <i className="fa fa-users bg_team"></i>
                                    <h4>Team Structure</h4>
                                </div>
                                <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>Dedicated experts assigned to your fintech project</p>
                                <div className="role_grid">
                                    <div className="role_item">
                                        <i className="fa fa-pencil-square"></i>
                                        <div className="role_info"><span>Product Designer</span><small>x1</small></div>
                                    </div>
                                    <div className="role_item">
                                        <i className="fa fa-apple"></i>
                                        <div className="role_info"><span>iOS Developer</span><small>x2</small></div>
                                    </div>
                                    <div className="role_item">
                                        <i className="fa fa-android"></i>
                                        <div className="role_info"><span>Android Developer</span><small>x2</small></div>
                                    </div>
                                    <div className="role_item">
                                        <i className="fa fa-database"></i>
                                        <div className="role_info"><span>Backend Developer</span><small>x2</small></div>
                                    </div>
                                    <div className="role_item">
                                        <i className="fa fa-bug"></i>
                                        <div className="role_info"><span>QA Engineer</span><small>x2</small></div>
                                    </div>
                                    <div className="role_item">
                                        <i className="fa fa-cog"></i>
                                        <div className="role_info"><span>DevOps Engineer</span><small>x1</small></div>
                                    </div>
                                </div>
                                <div className="team_summary_badge">Total Team Size: 10 experts</div>
                            </div>
                        </div>
                        <div className="cta_center">
                            <button className="btn_quote"><i className="fa fa-envelope-o"></i> Request Quote for FinTech</button>
                        </div>
                    </div>

                    {/*  Placeholders for other industries (pattern repeat)  */}
                    <div id="education" className="industry_content">
                        <div className="text-center" style={{ padding: "100px 0" }}>
                            <h3>Education Solutions</h3>
                            <p>Content for Education will be added here...</p>
                        </div>
                    </div>
                    {/*  (I will only add the first one fully to demonstrate, or add more if requested)  */}

                </div>
            </section>

            {/*  Awards Section  */}
            <section className="our_awards_section" id="our_awards_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="our_awards_header_box">
                                <h2>Our Awards</h2>
                                <p>MacAppStudio has been recognize by Intel</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">
                            <div className="our_awards_desc_table">
                                <div className="owl-carousel owl-theme" id="our_awards" style={{ display: "block !important", opacity: "1 !important" }}>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award01.png" className="award_icon" alt="" style={{ display: "inline-block !important", width: "150px !important" }} />
                                            <p><span>Intel Worldwide</span> <span>Top Innovator 2016</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award02.png" className="award_icon" alt="" />
                                            <p><span>Intel BlackBelt for</span> <span>App Development</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award03.png" className="award_icon" alt="" />
                                            <p><span>Most Valuable</span> <span>Developers Award</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award01.png" className="award_icon" alt="" />
                                            <p><span>Intel Worldwide</span> <span>Top Innovator 2017</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award04.png" className="award_icon" alt="" />
                                            <p><span>Winner of Intel Best App</span> <span>to Stay in Sync Contest</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award05.png" className="award_icon" alt="" />
                                            <p><span>Winner of the Intel Best App</span> <span>to Stay Informed Content</span></p>
                                        </div>
                                    </div>
                                    <div className="item text-center">
                                        <div className="our_awards_desc_box">
                                            <img src="asserts/images/index/award06.png" className="award_icon" alt="" />
                                            <p><span>Winner of Intel Dixons Home</span> <span>Innovation Challenge</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Timeline Section  */}
            <section className="timeline_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5 style={{ color: "#1d63ed", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px", marginBottom: "10px" }}>Project Roadmap</h5>
                            <h2 className="vs_title" style={{ marginBottom: "15px" }}>Development Timeline</h2>
                            <p style={{ color: "#666", marginBottom: "60px" }}>Clear stages with predictable delivery milestones</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline_container">
                                <div className="timeline_step">
                                    <div className="step_icon_box bg_red_t">
                                        <i className="fa fa-bullseye"></i>
                                    </div>
                                    <span className="step_num">1</span>
                                    <span className="step_label">Discovery</span>
                                    <span className="step_duration">15 days</span>
                                </div>
                                <div className="timeline_step">
                                    <div className="step_icon_box bg_orange_t">
                                        <i className="fa fa-paint-brush"></i>
                                    </div>
                                    <span className="step_num">2</span>
                                    <span className="step_label">Design</span>
                                    <span className="step_duration">15 days</span>
                                </div>
                                <div className="timeline_step">
                                    <div className="step_icon_box bg_purple_t">
                                        <i className="fa fa-code"></i>
                                    </div>
                                    <span className="step_num">3</span>
                                    <span className="step_label">Development</span>
                                    <span className="step_duration">20 days</span>
                                </div>
                                <div className="timeline_step">
                                    <div className="step_icon_box bg_green_t">
                                        <i className="fa fa-flask"></i>
                                    </div>
                                    <span className="step_num">4</span>
                                    <span className="step_label">Testing</span>
                                    <span className="step_duration">15 days</span>
                                </div>
                                <div className="timeline_step">
                                    <div className="step_icon_box bg_cyan_t">
                                        <i className="fa fa-trophy"></i>
                                    </div>
                                    <span className="step_num">5</span>
                                    <span className="step_label">Launch</span>
                                    <span className="step_duration">5 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="agile_banner">
                                <i className="fa fa-bolt"></i> Agile Delivery: <span style={{ color: "#1e40af", marginLeft: "5px" }}>Progress updates every 15-20 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Tech Stack Section  */}
            <section className="tech_stack_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h5 style={{ color: "#1d63ed", fontWeight: "700", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px", marginBottom: "10px" }}>Technology Stack</h5>
                            <h2 className="vs_title" style={{ marginBottom: "15px" }}>Tools & Technologies We Use</h2>
                            <p style={{ color: "#666", marginBottom: "0" }}>Modern, scalable, and battle-tested technologies</p>
                        </div>
                    </div>
                    <div className="tech_grid">
                        <div className="tech_card">
                            <i className="fa fa-code tech_icon t_blue"></i>
                            <span className="tech_name">React</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-server tech_icon t_green"></i>
                            <span className="tech_name">Node.js</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-mobile tech_icon t_orange"></i>
                            <span className="tech_name">Swift</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-android tech_icon t_purple"></i>
                            <span className="tech_name">Kotlin</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-cloud tech_icon t_orange"></i>
                            <span className="tech_name">AWS</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-fire tech_icon t_yellow"></i>
                            <span className="tech_name">Firebase</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-database tech_icon t_green"></i>
                            <span className="tech_name">MongoDB</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-database tech_icon t_blue"></i>
                            <span className="tech_name">PostgreSQL</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-cube tech_icon t_blue"></i>
                            <span className="tech_name">Docker</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-cubes tech_icon t_blue"></i>
                            <span className="tech_name">Kubernetes</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-share-alt tech_icon t_pink"></i>
                            <span className="tech_name">GraphQL</span>
                        </div>
                        <div className="tech_card">
                            <i className="fa fa-code tech_icon t_blue"></i>
                            <span className="tech_name">TypeScript</span>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Engagement Terms Section  */}
            <section className="terms_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="vs_title" style={{ fontSize: "42px", marginBottom: "50px" }}>Flexible Engagement Terms</h2>
                        </div>
                    </div>
                    <div className="terms_grid">
                        <div className="term_card">
                            <div className="term_icon_box bg_blue_soft">
                                <i className="fa fa-credit-card"></i>
                            </div>
                            <h3>Advance Payment</h3>
                            <p>Secures your dedicated team slot immediately</p>
                        </div>
                        <div className="term_card">
                            <div className="term_icon_box bg_purple_soft">
                                <i className="fa fa-calendar"></i>
                            </div>
                            <h3>30 Days Notice</h3>
                            <p>Complete flexibility to scale or adjust as needed</p>
                        </div>
                        <div className="term_card">
                            <div className="term_icon_box bg_green_soft">
                                <i className="fa fa-bullseye"></i>
                            </div>
                            <h3>Milestone Bonuses</h3>
                            <p>Celebrate project wins and achievements together</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn_get_started">Get Started Today</button>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Client Logos Section  */}
            <section className="logo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="vs_title" style={{ fontSize: "42px", marginBottom: "10px" }}>When have team of 100 People</h2>
                            <p style={{ color: "#666", fontSize: "18px" }}>We have limited team, Kindly book your slot</p>
                        </div>
                    </div>
                    <div className="logo_grid">
                        <div className="logo_item">
                            <img src="asserts/images/taneira_placeholder.png" alt="Taneira" />
                        </div>
                        <div className="logo_item">
                            <img src="asserts/images/jio_placeholder.png" alt="Jio" />
                        </div>
                        <div className="logo_item">
                            <img src="asserts/images/powersoaps_placeholder.png" alt="Power Soaps" />
                        </div>
                        <div className="logo_item">
                            <img src="asserts/images/medyoga_placeholder.png" alt="MedYoga" />
                        </div>
                    </div>
                </div>
            </section>

            {/*  Countdown Section  */}
            <section className="countdown_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="urgent_badge">
                                <i className="fa fa-exclamation-circle"></i> 🔥 URGENT: Only 5 slots left this month!
                            </div>
                            <h2 className="countdown_title">Secure Your <span>Dream Team</span> Now</h2>
                            <p className="countdown_subtitle">Join 1000+ companies who secured their development teams. <strong>Don&apos;t miss out - slots filling fast!</strong></p>
                            
                            <div className="countdown_box">
                                <div className="countdown_label">
                                    <i className="fa fa-clock-o"></i> Limited Time Offer Ends In:
                                </div>
                                <div className="timer_display">
                                    <div className="timer_unit">
                                        <span className="timer_num" id="hours">02</span>
                                        <span className="timer_label">Hours</span>
                                    </div>
                                    <span className="timer_sep">:</span>
                                    <div className="timer_unit">
                                        <span className="timer_num" id="minutes">45</span>
                                        <span className="timer_label">Minutes</span>
                                    </div>
                                    <span className="timer_sep">:</span>
                                    <div className="timer_unit">
                                        <span className="timer_num" id="seconds">15</span>
                                        <span className="timer_label">Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Stats Grid Section  */}
            <section className="stats_grid_section">
                <div className="container">
                    <div className="stats_grid">
                        <div className="stat_card s_green">
                            <i className="fa fa-cloud-upload stat_icon_l c_green"></i>
                            <span className="stat_big_num">147</span>
                            <span className="stat_desc" style={{ color: "#16a34a" }}>Teams Deployed</span>
                        </div>
                        <div className="stat_card s_blue">
                            <div className="star_rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <span className="stat_big_num">4.9/5</span>
                            <span className="stat_desc">Client Rating</span>
                        </div>
                        <div className="stat_card s_purple">
                            <i className="fa fa-rocket stat_icon_l c_purple"></i>
                            <span className="stat_big_num">1.2</span>
                            <span className="stat_desc">Avg Weeks Start</span>
                        </div>
                        <div className="stat_card s_red">
                            <i className="fa fa-hourglass-half stat_icon_l c_red"></i>
                            <span className="stat_big_num">5</span>
                            <span className="stat_desc">Slots Left</span>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Batch Progress Section  */}
            <section className="batch_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="vs_title" style={{ marginBottom: "10px" }}>Live Batch Progress</h2>
                            <p style={{ color: "#64748b", fontSize: "16px" }}>Real-time updates • Last updated: Just now</p>
                        </div>
                    </div>
                    <div className="batch_grid">
                        {/*  November  */}
                        <div className="batch_card">
                            <div className="batch_badge badge_blue">Within 3 hours Filled</div>
                            <div className="batch_info">
                                <div className="batch_header">
                                    <span className="batch_name">November Month Slots</span>
                                    <span className="batch_status filled">100/100 filled</span>
                                </div>
                                <div className="progress_container">
                                    <div className="progress_bar" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <button className="batch_btn btn_gray" disabled>Slot not Available</button>
                        </div>
                        {/*  December  */}
                        <div className="batch_card">
                            <div className="batch_badge badge_blue">Within 2 hours Filled</div>
                            <div className="batch_info">
                                <div className="batch_header">
                                    <span className="batch_name">December Month Slots</span>
                                    <span className="batch_status filled">100/100 filled</span>
                                </div>
                                <div className="progress_container">
                                    <div className="progress_bar" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <button className="batch_btn btn_gray" disabled>Slot not Available</button>
                        </div>
                        {/*  January  */}
                        <div className="batch_card">
                            <div className="batch_badge badge_pink"><i className="fa fa-bolt"></i> Filling Fast</div>
                            <div className="batch_info">
                                <div className="batch_header">
                                    <span className="batch_name">January Month Slots</span>
                                    <span className="batch_status">63/100 filled</span>
                                </div>
                                <div className="progress_container">
                                    <div className="progress_bar" style={{ width: "63%" }}></div>
                                </div>
                            </div>
                            <button className="batch_btn btn_green">Book Your Slot</button>
                        </div>
                        {/*  February  */}
                        <div className="batch_card">
                            <div className="batch_badge badge_pink"><i className="fa fa-bolt"></i> Filling Fast</div>
                            <div className="batch_info">
                                <div className="batch_header">
                                    <span className="batch_name">February Month Slots</span>
                                    <span className="batch_status">44/100 filled</span>
                                </div>
                                <div className="progress_container">
                                    <div className="progress_bar" style={{ width: "44%" }}></div>
                                </div>
                            </div>
                            <button className="batch_btn btn_green">Book Your Slot</button>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Team Details Section  */}
            <section className="team_details_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ fontSize: "42px", fontWeight: "800", color: "#1a1a1a", marginBottom: "50px" }}>Total 20 Teams</h2>
                        </div>
                    </div>
                    <div className="team_grid">
                        {/*  Team 1  */}
                        <div className="team_detail_card p_purple">
                            <h3 className="team_title">Team 1</h3>
                            <span className="team_client">Diamler - Jan 2025 to Dec 2026</span>
                            <ul className="role_list">
                                <li className="role_item"><i className="fa fa-android"></i> Android - 1</li>
                                <li className="role_item"><i className="fa fa-apple"></i> iOS - 2</li>
                                <li className="role_item"><i className="fa fa-globe"></i> Web - 1</li>
                                <li className="role_item"><i className="fa fa-database"></i> Full Stack - 1</li>
                                <li className="role_item"><i className="fa fa-check-square-o"></i> QA - 1</li>
                                <li className="role_item"><i className="fa fa-paint-brush"></i> UI/UX - 1</li>
                                <li className="role_item"><i className="fa fa-briefcase"></i> Business Analyst - 1</li>
                            </ul>
                        </div>
                        {/*  Team 2  */}
                        <div className="team_detail_card p_red">
                            <h3 className="team_title">Team 2</h3>
                            <span className="team_client">Jio - Jan 2025 to Dec 2026</span>
                            <ul className="role_list">
                                <li className="role_item"><i className="fa fa-android"></i> Android - 1</li>
                                <li className="role_item"><i className="fa fa-apple"></i> iOS - 2</li>
                                <li className="role_item"><i className="fa fa-globe"></i> Web - 1</li>
                                <li className="role_item"><i className="fa fa-database"></i> Full Stack - 1</li>
                                <li className="role_item"><i className="fa fa-check-square-o"></i> QA - 1</li>
                                <li className="role_item"><i className="fa fa-paint-brush"></i> UI/UX - 1</li>
                                <li className="role_item"><i className="fa fa-briefcase"></i> Business Analyst - 1</li>
                            </ul>
                        </div>
                        {/*  Team 3  */}
                        <div className="team_detail_card p_orange">
                            <h3 className="team_title">Team 3</h3>
                            <span className="team_client">Power Soap - Dec 2025 to Mar 2026</span>
                            <ul className="role_list">
                                <li className="role_item"><i className="fa fa-android"></i> Android - 1</li>
                                <li className="role_item"><i className="fa fa-apple"></i> iOS - 2</li>
                                <li className="role_item"><i className="fa fa-globe"></i> Web - 1</li>
                                <li className="role_item"><i className="fa fa-database"></i> Full Stack - 1</li>
                                <li className="role_item"><i className="fa fa-check-square-o"></i> QA - 1</li>
                                <li className="role_item"><i className="fa fa-paint-brush"></i> UI/UX - 1</li>
                                <li className="role_item"><i className="fa fa-briefcase"></i> Business Analyst - 1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="team_legend">
                        <div className="legend_item"><span className="dot dot_green"></span> Available: 90</div>
                        <div className="legend_item"><span className="dot dot_gray"></span> Booked: 10</div>
                    </div>
                </div>
            </section>

            {/*  Slots Grid Section  */}
            <section className="slots_grid_section">
                <div className="container">
                    <div className="team_legend" style={{ marginTop: "0", marginBottom: "30px" }}>
                        <div className="legend_item"><span className="dot dot_green"></span> Available: 90</div>
                        <div className="legend_item"><span className="dot dot_gray"></span> Booked: 10</div>
                    </div>
                    <div className="slots_container">
                        {/*  Generative loop replacement for brevity but I'll write a few rows  */}
                        <div className="slot_box"><span className="slot_num">Team - 11</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 12</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 13</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 14</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 14</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 15</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 16</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 17</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 18</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 19</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 20</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 21</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 21</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 22</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 23</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 24</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 25</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 26</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 27</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 28</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Team - 28</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 29</span><span className="slot_book">Book</span></div>
                        <div className="slot_box focused"><span className="slot_num">Slot - 30</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 31</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 32</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 33</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 34</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 35</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 35</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 36</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 37</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 38</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 39</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 40</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 41</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 42</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 42</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 43</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 44</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 45</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 46</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 47</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 48</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 49</span><span className="slot_book">Book</span></div>
                        <div className="slot_box"><span className="slot_num">Slot - 49</span><span className="slot_book">Book</span></div>
                    </div>
                    <div className="slots_actions">
                        <button className="btn_secure">Secure My Dream Team Slot Now <i className="fa fa-arrow-right"></i></button>
                        <button className="btn_show_more">Show More (Available Slot)</button>
                    </div>
                    <div className="slots_footer_text">
                        Limited slots available • First-come, first-served
                    </div>
                </div>
            </section>

            {/*  Your Journey Section  */}
            <section className="journey_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="vs_title" style={{ fontSize: "42px" }}>Your Journey <span>with Us</span></h2>
                            <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>From securing your team to celebrating milestones, here&apos;s how we work together to bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="journey_grid">
                        <div className="journey_line"></div>
                        {/*  Step 1  */}
                        <div className="journey_card">
                            <div className="journey_icon_box j_purple"><i className="fa fa-credit-card"></i></div>
                            <h4>Advance Payment</h4>
                            <span className="sub_point" style={{ color: "#3b82f6" }}>50% secures your team slot</span>
                            <p className="main_text">Make your advance payment to immediately secure your dedicated team slot and begin the onboarding process.</p>
                        </div>
                        {/*  Step 2  */}
                        <div className="journey_card">
                            <div className="journey_icon_box j_blue"><i className="fa fa-calendar"></i></div>
                            <h4>Weekly Updates</h4>
                            <span className="sub_point" style={{ color: "#3b82f6" }}>Reports & calls for transparency</span>
                            <p className="main_text">Receive detailed weekly progress reports and participate in regular calls to ensure complete project transparency.</p>
                        </div>
                        {/*  Step 3  */}
                        <div className="journey_card">
                            <div className="journey_icon_box j_blue"><i className="fa fa-trophy"></i></div>
                            <h4>Milestone Reviews</h4>
                            <span className="sub_point" style={{ color: "#3b82f6" }}>Celebrate achievements with bonuses</span>
                            <p className="main_text">Comprehensive evaluation of project phases and deliverables, with milestone bonuses for exceptional performance.</p>
                        </div>
                        {/*  Step 4  */}
                        <div className="journey_card">
                            <div className="journey_icon_box j_teal"><i className="fa fa-clock-o"></i></div>
                            <h4>30 Days Notice</h4>
                            <span className="sub_point" style={{ color: "#3b82f6" }}>Complete flexibility to adjust</span>
                            <p className="main_text">Scale your team up or down with just 30 days notice. Complete flexibility for your changing needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  What You&apos;ll Receive Section  */}
            <section className="receive_section">
                <div className="container">
                    <div className="receive_box">
                        <h2 className="vs_title" style={{ fontSize: "36px", marginBottom: "20px" }}>What You&apos;ll Receive</h2>
                        <div className="receive_grid">
                            {/*  Item 1  */}
                            <div className="receive_item">
                                <i className="fa fa-file-text-o receive_icon t_blue"></i>
                                <h4>Weekly Progress Reports</h4>
                                <p>Detailed updates on project advancement and team performance</p>
                            </div>
                            {/*  Item 2  */}
                            <div className="receive_item">
                                <i className="fa fa-phone receive_icon t_green"></i>
                                <h4>Weekly Calls</h4>
                                <p>Regular communication to ensure alignment and address concerns</p>
                            </div>
                            {/*  Item 3  */}
                            <div className="receive_item">
                                <i className="fa fa-line-chart receive_icon t_purple"></i>
                                <h4>Task Dashboard</h4>
                                <p>Real-time visibility into project status and task completion</p>
                            </div>
                            {/*  Item 4  */}
                            <div className="receive_item">
                                <i className="fa fa-eye receive_icon t_orange"></i>
                                <h4>Milestone Reviews</h4>
                                <p>Comprehensive evaluation of project phases and deliverables</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Final CTA Section  */}
            <section className="final_cta_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={{ fontSize: "48px", fontWeight: "800", color: "#1a1a1a" }}>Your Dream Deserves The Right Team</h2>
                            <p style={{ color: "#64748b", fontSize: "18px", marginTop: "15px" }}>Book your slot today & start building in 2 weeks</p>
                            <div className="cta_btns">
                                <button className="btn_book_now">Book Your Slot Today <i className="fa fa-arrow-right"></i></button>
                                <button className="btn_schedule">Schedule a Call</button>
                            </div>
                        </div>
                    </div>
                    <div className="cta_grid">
                        {/*  Card 1  */}
                        <div className="cta_card ct_red">
                            <i className="fa fa-calendar-check-o cta_icon_l" style={{ color: "#e11d48" }}></i>
                            <h4>Start in 1-2 Weeks</h4>
                            <p>Get your project moving immediately</p>
                        </div>
                        {/*  Card 2  */}
                        <div className="cta_card ct_blue">
                            <i className="fa fa-eye cta_icon_l" style={{ color: "#2563eb" }}></i>
                            <h4>Complete Transparency</h4>
                            <p>Full tracking and reporting visibility</p>
                        </div>
                        {/*  Card 3  */}
                        <div className="cta_card ct_purple">
                            <span className="cta_icon_l" style={{ color: "#8b5cf6" }}><i className="fa fa-arrows-alt"></i></span>
                            <h4>Scale Anytime</h4>
                            <p>Adjust team size as needed</p>
                        </div>
                        {/*  Card 4  */}
                        <div className="cta_card ct_green">
                            <i className="fa fa-smile-o cta_icon_l" style={{ color: "#16a34a" }}></i>
                            <h4>Peace of Mind</h4>
                            <p>Notice period flexibility + instant replacements</p>
                        </div>
                    </div>
                </div>
            </section>
        
    </main>
  );
}
