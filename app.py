import streamlit as st
import preprocessor
import pandas as pd
from datetime import datetime


st.set_page_config(layout="wide")
st.title('Poly Pulleys Faults Detection')


col1, col2 = st.columns(2)

with col1:
    st.image("https://www.iqsdirectory.com/articles/conveyors/belt-conveyors/belt-conveyor.gif", width=600)
with col2:
    pulley_location = st.selectbox(label="pulley Location",options=['Head pulley', 'Bend pulley', 'Tail pulley'])
    belt_tension = st.slider(label="Belt Tension",min_value=200,max_value=600,step=1)
    Speed = st.number_input(label="Speed",min_value=1.5000000, max_value=5.5000000,step=0.0000001)
    Material = st.selectbox(label="Material",options=['Limestone', 'Coal', 'Iron Ore', 'Steel', 'Sand'])
    Vibration = st.number_input(label="Vibration",min_value=0.1, max_value=1.5,step=0.0000001)
    Temprerature = st.number_input(label="Temerature",min_value=30, max_value=60,step=1)
    Acoustic = st.number_input(label="Acoutic",min_value=50, max_value=80,step=1)

    st.write(pulley_location)

    df = pd.DataFrame([[datetime.now().date(),pulley_location,belt_tension,Speed,Material,Vibration,Temprerature,Acoustic,'Groove Damage'
    ]],columns=['Timestamp', 'Pulley Location', 'Belt Tension', 'Speed', 'Material',
        'Vibration', 'Temperature', 'Acoustic', 'Problem Label'])
    # df = pd.read_csv('./dataset/pulley_problems_dataset.csv')


    if st.button('Predict'):
        df = preprocessor.preprocess(df)
        st.write(df)
    # st.write(df.columns)
# st.write(pully_location)
# st.write(Speed)
# Material	Vibration	Temperature	Acoustic
