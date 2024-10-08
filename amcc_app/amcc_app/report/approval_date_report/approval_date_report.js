frappe.query_reports["Approval Date Report"] = {
    "filters": [
    {
            "fieldname":"from_date",
            "label": __("From Date"),
            "fieldtype": "Date",
            "width": "80",
            "default": frappe.datetime.get_today(),
            "reqd": 1
        },
        {
            "fieldname":"to_date",
            "label": __("To Date"),
            "fieldtype": "Date",
            "width": "80",
            "default": frappe.datetime.get_today(),
            "reqd": 1
        }
    ]
    
    }