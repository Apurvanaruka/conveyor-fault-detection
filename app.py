import streamlit as st

st.title('Poly Pulleys Faults Detection')

pully_location = st.selectbox(label="pulley Location",options=['Head pulley', 'Bend pulley', 'Tail pulley'])
belt_tension = st.slider(label="Belt Tension",min_value=200,max_value=600,step=1)
Speed = st.number_input(label="Speed",min_value=1.5, max_value=5.5,step=0.0000001)
Material = st.selectbox(label="Material",options=['Coal', 'Copper', 'Iron', 'Limestone', 'Nickel', 'Sand', 'Uranium'])
Vibration = st.number_input(label="Vibration",min_value=0.0, max_value=0.5,step=0.0000001)
Temerature = st.number_input(label="Temerature")

st.write(belt_tension)
st.write(pully_location)
st.write(Speed)
# Material	Vibration	Temperature	Acoustic