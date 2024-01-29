from fastai.vision import load_learner

model = load_learner(Path("./model"), file="export.pkl")


model.predict()