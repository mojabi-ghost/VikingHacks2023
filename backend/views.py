
import json
from django.shortcuts import render
import requests
from django.http import JsonResponse

def home(request):
    #First you'll send maria data.
    #print(request)
    #do the calculation
    #send data back as a python object

# parsing body of form
    
# Get Vehicle Type and Distance
    resp_data = json.loads(request.body.decode("utf-8")) 
    type = resp_data["vehicle"]
    distance = float(resp_data["distance"])
    if type == "car":
        choice = 1
    elif type == "motorcycle":
        choice = 2
    # connect with API and use
    MY_API_KEY="7SAZBY9HVTMZBTGQECC9J7SB0TAY"
    url = "https://beta3.api.climatiq.io/estimate"
        # set activity ID, region and year
    if choice == 1:
        activity_id = "passenger_vehicle-vehicle_type_automobile-fuel_source_na-distance_na-engine_size_na"
        region = "Global"
        year = "2017"
    elif choice == 2:
        activity_id = "passenger_vehicle-vehicle_type_motorcycle-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na"
        region = "US"
        year = "2021"
        # set the parameters for retrieving emmissions estimation
    distance_unit = "mi"
    if choice == 1:
        distance = distance * 1.609  # convert to KM
        distance_unit = "km"
    parameters = {
        "distance": distance,
        "distance_unit": distance_unit
        }

    json_body = {
        "emission_factor": {
            "activity_id": activity_id,
            "region": region,
        },
        # Specify how much energy we're estimating for
        "parameters": parameters
    }
    authorization_headers = {"Authorization": f"Bearer: {MY_API_KEY}"}

    # This line will send the request and retrieve the body as JSON. - converted to python dict
    api_response = requests.post(url, json=json_body, headers=authorization_headers).json()
    
    return JsonResponse(api_response)
    
    

def index(request):
    #template = loader.get_template( 'app/index.html')
    return render(request, 'index.html', None)