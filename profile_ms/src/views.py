from django.http import JsonResponse
from django.views.generic import DetailView

from src.models import Profile


def _serialize_profile_(profile):
    data = {'name': profile.user.username,
            'first_name': profile.user.first_name,
            'last_name': profile.user.last_name,
            'address': {
                'street': profile.address_street,
                'number': profile.address_number,
                'postcode': profile.address_postcode,
                'city': profile.address_city,
                'nation': profile.address_nation
            }
            }
    return data


class ProfileDetailView(DetailView):
    model = Profile
    template_name = 'profile_detail.html'

    def get(self, request, *args, **kwargs):
        data = _serialize_profile_(self.get_object())
        return JsonResponse(data, status=200, safe=False)
