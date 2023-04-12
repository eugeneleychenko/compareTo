import React, { useState } from "react";

const categories = [
  {
    name: "Project Management",
    companies: [
      "Asana",
      "Smartsheet",
      "monday.com",
      "ClickUp",
      "Wrike",
      "Airtable",
      "Notion",
      "Trello",
      "Basecamp"
    ]
  },
  {
    name: "E-Commerce Platforms",
    companies: [
      "Shopify",
      "Shopify Plus",
      "WooCommerce",
      "BigCommerce",
      "Ecwid",
      "Sana Commerce Cloud",
      "Wix",
      "Salesforce Commerce for B2C",
      "Salesforce Commerce for B2B"
    ]
  },
  {
    name: "Marketing Automation",
    companies: [
      "HubSpot Marketing Hub",
      "ActiveCampaign for Marketing",
      "Klaviyo",
      "Braze",
      "Constant Contact Lead Gen & CRM (formerly SharpSpring)",
      "Insider",
      "Mailchimp All-in-One Marketing Platform",
      "Sendinblue",
      "Bloomreach"
    ]
  },
  {
    name: "Accounting",
    companies: [
      "NetSuite",
      "QuickBooks Online",
      "QuickBooks Desktop Pro",
      "Sage Intacct",
      "FreshBooks",
      "QuickBooks Desktop Enterprise",
      "Xero",
      "SAP Business One",
      "BlackLine"
    ]
  },
  {
    name: "CRM",
    companies: [
      "Salesforce Sales Cloud",
      "HubSpot Sales Hub",
      "Zoho CRM",
      "ClickUp",
      "monday sales CRM",
      "Freshsales",
      "Pipedrive",
      "ActiveCampaign for Sales",
      "Constant Contact Lead Gen & CRM (formerly SharpSpring)"
    ]
  },
  {
    name: "Expense Management",
    companies: [
      "SAP Concur",
      "Navan (Formerly TripActions)",
      "Brex",
      "Expensify",
      "Airbase",
      "Zoho Expense",
      "Ramp",
      "Pleo",
      "Divvy"
    ]
  },
  {
    name: "ERP Systems",
    companies: [
      "NetSuite",
      "Sage Intacct",
      "SAP S/4HANA Cloud",
      "SAP Business One",
      "SAP ERP",
      "Acumatica",
      "TallyPrime",
      "Microsoft Dynamics 365 Business Central",
      "Odoo ERP"
    ]
  },
  {
    name: "Online Backup",
    companies: [
      "IDrive Online Backup",
      "Veeam Data Platform Foundation",
      "Druva Data Resiliency Cloud",
      "Acronis Cyber Backup",
      "Unitrends Backup and Recovery",
      "Redstor Backup and Archiving",
      "Backblaze",
      "MSP360 Managed Backup",
      "Datto Backupify"
    ]
  },
  {
    name: "Video Conference",
    companies: [
      "Zoom",
      "Microsoft Teams",
      "Skype",
      "Webex Meetings",
      "BlueJeans Meetings",
      "GoTo Meeting",
      "Google Workspace",
      "Webex App",
      "join.me"
    ]
  }
];

const Dropdown = () => {
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCompany("");
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  return (
    <div className="flex flex-col w-50 mx-auto" style={{ marginTop: "100px" }}>
      <div className="mb-4" style={{ marginBottom: "20px" }}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
          style={{ fontSize: "15px" }}
        >
          Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          style={{ width: "100%", height: "40px" }}
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="company"
          style={{ fontSize: "15px" }}
        >
          Company
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          style={{ width: "100%", height: "40px" }}
          id="company"
          value={company}
          onChange={handleCompanyChange}
          disabled={!category}
        >
          <option value="">Select a company</option>
          {categories
            .find((category) => category.name === category.name)
            ?.companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
