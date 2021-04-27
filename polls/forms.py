from bootstrap_modal_forms.forms import BSModalModelForm
from .models import delivery
class deliveryForm(BSModalModelForm):
    class Meta:
        model=delivery
        fields='__all__'
