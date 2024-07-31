frappe.ui.form.on("Purchase Order", "onload", function(frm) {    
  if(frm.doc.workflow_state === 'Pending For FC Approval' && frappe.user.has_role(['PO Manager'])){
      frm.doc.po_manager_name = frappe.session.user
  frm.doc.pom_date = frappe.datetime.nowdate()
    } 
      else if(frm.doc.workflow_state === 'Pending For GM Approval' && frappe.user.has_role(['FC'])){
      frm.doc.fc_name = frappe.session.user
frm.doc.fcm_date = frappe.datetime.nowdate()
    }
    
    else if(frm.doc.workflow_state === 'Approved By GM' && frappe.user.has_role(['GM'])){
      frm.doc.gm_approver_name = frappe.session.user
frm.doc.gmm_date = frappe.datetime.nowdate()
    }    
});

frappe.ui.form.on("Purchase Order", "validate", function(frm) {    
      if(frm.doc.workflow_state === 'Pending For FC Approval' && frappe.user.has_role(['PO Manager'])){
      frm.doc.po_manager_name = frappe.session.user
  frm.doc.pom_date = frappe.datetime.nowdate()
    } 
      else if(frm.doc.workflow_state === 'Pending For GM Approval' && frappe.user.has_role(['FC'])){
      frm.doc.fc_name = frappe.session.user
frm.doc.fcm_date = frappe.datetime.nowdate()
    }
    
    else if(frm.doc.workflow_state === 'Approved By GM' && frappe.user.has_role(['GM'])){
      frm.doc.gm_approver_name = frappe.session.user
frm.doc.gmm_date = frappe.datetime.nowdate()
    }
});
