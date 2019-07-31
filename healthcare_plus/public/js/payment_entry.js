/**
 * Created by bai on 7/30/19.
 */
frappe.ui.form.on('Payment Entry', {
    hp_insurance_coverage: function(frm) {
    	var is_required

		if (cur_frm.doc.hp_insurance_coverage==1){
			is_required = 1
		}else{
			is_required = 0
		}

		cur_frm.set_df_property("hp_insurance_provider", "reqd", is_required);
		cur_frm.set_df_property("patient", "reqd", is_required);
	}
});
