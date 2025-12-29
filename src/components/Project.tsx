import React from "react";
import img_cap from "../assets/images/img_cap.png";
import brain_tum from "../assets/images/brain_tum.png";
import sent_analysis from "../assets/images/sent_analysis.png";
import plant_leaf from "../assets/images/plant_leaf.png";
import loan_risk_pred from "../assets/images/loan_risk_pred.png";
import taxi_analytics from "../assets/images/taxi_analytics.png";
import etl_pipeline from "../assets/images/elt_pipeline.png";
import weather_pred from "../assets/images/weather_pred.png";
import xrp_pred from "../assets/images/xrp_pred.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img
            src={loan_risk_pred}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <a
            href="https://github.com/Sidsuresh/Loan_Risk_Prediction"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Data-Driven Credit Risk Assessment: Predicting Loan Defaults with
              ML Models
            </h2>
          </a>
          <div className="project-actions">
            <a
              href="https://loan-risk-pred.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">🚀 Live Demo</button>
            </a>

            <a
              href="https://github.com/Sidsuresh/Loan_Risk_Prediction"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Developed a loan default risk prediction system using historical
                Lending Club data, applying Decision Tree and Gradient Boosting
                classifiers to assess borrower risk.
              </li>
              <li>
                Achieved an F1-score of 0.9175 with Gradient Boosting,
                outperforming the Decision Tree baseline (0.9142), with
                performance differences confirmed significant via paired t-test
                (Confidence level of 95%).
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Scikit-learn</span>
            <span className="tech-badge">Numpy</span>
            <span className="tech-badge">Pandas</span>
          </div>
        </div>
        <div className="project">
          <img
            src={weather_pred}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <a
            href="https://github.com/Sidsuresh/Production_Weather_Forecasting_Models"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Time-Series Weather Forecasting System for Sydney</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://syd-weather-forecast.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">🚀 Live Demo</button>
            </a>

            <a
              href="https://github.com/Sidsuresh/Production_Weather_Forecasting_Models"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Built and deployed two production ML models for weather
                forecasting in Sydney:
                <ul>
                  <li>Binary rain prediction (+7 days)</li>
                  <li>
                    Regression model for cumulative precipitation (next 3 days)
                  </li>
                </ul>
              </li>
              <li>
                Deployed models as scalable REST APIs, enabling real-time
                consumption by downstream services.
              </li>
              <li>
                Selected and optimised task-specific evaluation metrics
                (classification and regression) to ensure reliable real-world
                forecasting performance.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Scikit-learn</span>
            <span className="tech-badge">Pandas</span>
            <span className="tech-badge">FastAPI</span>
            <span className="tech-badge">Docker</span>
          </div>
        </div>
        <div className="project">
          <img src={xrp_pred} className="zoom" alt="thumbnail" width="100%" />
          <a
            href="https://github.com/Sidsuresh/XRP-Time-Series-Forecasting"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Time-Series Forecasting & Data Product for Ripple</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://xrp-forecast.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">🚀 Live Demo</button>
            </a>

            <a
              href="https://github.com/Sidsuresh/XRP-Time-Series-Forecasting"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Built a time-series regression model using historical XRP
                (Ripple) market data sourced from CoinGecko, engineering lagged
                and rolling-window features for next-day high-price prediction.
              </li>
              <li>
                Achieved RMSE = 0.0999 and R² = 0.9418 on a held-out test set,
                demonstrating strong fit under controlled experimental
                assumptions.
              </li>
              <li>
                Delivered an interactive Streamlit dashboard for exploratory
                analysis and model-driven insights, integrating historical
                trends and model outputs.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">Scikit-learn</span>
            <span className="tech-badge">Pandas</span>
            <span className="tech-badge">Docker</span>
            <span className="tech-badge">FastAPI</span>
          </div>
        </div>
        <div className="project">
          <img
            src={etl_pipeline}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <a
            href="https://github.com/Sidsuresh/Analytics-Data-Platform-using-Airflow-dbt-SQL"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Analytics Data Platform using Airflow, dbt & SQL</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://github.com/Sidsuresh/Analytics-Data-Platform-using-Airflow-dbt-SQL"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Architected a production-grade analytics platform processing
                Airbnb and Australian Census data using ELT pipelines
                orchestrated with Airflow.
              </li>
              <li>
                Implemented a Medallion architecture (Bronze/Silver/Gold) and
                star schema with Slowly Changing Dimensions (Type 2) to ensure
                historically accurate reporting.
              </li>
              <li>
                Built analytical data marts answering revenue, pricing, host
                behaviour, and geographic performance questions using advanced
                SQL.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">PostgreSQL</span>
            <span className="tech-badge">Apache Airflow</span>
            <span className="tech-badge">dbt Cloud</span>
            <span className="tech-badge">GCP</span>
          </div>
        </div>
        <div className="project">
          <img src={img_cap} className="zoom" alt="thumbnail" width="100%" />
          <a
            href="https://github.com/Sidsuresh/Image_Captioning_System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Multi-Modal Image Captioning Model with Transformer Architecture
            </h2>
          </a>
          <div className="project-actions">
            <a
              href="https://img-cap-system.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">🚀 Live Demo</button>
            </a>

            <a
              href="https://github.com/Sidsuresh/Image_Captioning_System"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Developed a multi-modal deep learning system combining a
                CNN-based image encoder and Transformer decoder to generate
                natural language descriptions from images.
              </li>
              <li>
                Achieved BLEU scores of 0.5955 (BLEU-1), 0.3869 (BLEU-2), 0.2566
                (BLEU-3), and 0.1700 (BLEU-4), indi- cating strong alignment
                between generated and reference captions
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Pytorch</span>
            <span className="tech-badge">NLTK</span>
            <span className="tech-badge">Computer Vision</span>
            <span className="tech-badge">Transformers</span>
          </div>
        </div>
        <div className="project">
          <img src={brain_tum} className="zoom" alt="thumbnail" width="100%" />

          <a
            href="https://github.com/Sidsuresh/Brain-Tumor-Detection-Vision-Transformers"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Brain Tumor Detection using Vision Transformers</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://vit-tumor-detection.streamlit.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">🚀 Live Demo</button>
            </a>

            <a
              href="https://github.com/Sidsuresh/Brain-Tumor-Detection-Vision-Transformers"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Built a brain tumour classification system using Vision
                Transformer (ViT) and benchmarked it against traditional CNN
                architectures (VGG-16, ResNet-50) on MRI images.
              </li>
              <li>
                Achieved a classification accuracy of 96.19% with the proposed
                ViT model, outperforming VGG-16 (91.69%) and ResNet-50 (90.54%),
                highlighting ViT's superior ability to capture spatial
                dependencies in medical imaging.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">PyTorch</span>
            <span className="tech-badge">Vision Transformers</span>
            <span className="tech-badge">Computer Vision</span>
          </div>
        </div>
        <div className="project">
          <img
            src={sent_analysis}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <a
            href="https://github.com/Sidsuresh/RoBERTaBasedSentimentAnalysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Sentiment Classification of Airline Reviews using Transformer
              (SieBERT)
            </h2>
          </a>
          <div className="project-actions">
            <a
              href="https://github.com/Sidsuresh/RoBERTaBasedSentimentAnalysis  "
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Scraped and labeled 2,000+ Emirates Airline reviews from Skytrax
                using BeautifulSoup.
              </li>
              <li>
                Fine-tuned the SieBERT model (RoBERTa-based) using Hugging Face
                Transformers on cleaned review text for binary sentiment
                classification.
              </li>
              <li>
                Achieved 91% test accuracy, with F1-scores of 0.91 (Negative)
                and 0.90 (Positive), demonstrating strong generalisation.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">PyTorch</span>
            <span className="tech-badge">RoBERTa</span>
            <span className="tech-badge">Sentiment Analysis</span>
            <span className="tech-badge">Hugging Face</span>
          </div>
        </div>
        <div className="project">
          <img
            src={taxi_analytics}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <a
            href="https://github.com/Sidsuresh/Large-Scale-Data-Processing-on-NYC-Taxi-Trips"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Large-Scale NYC Taxi Data Analytics & Machine Learning</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://github.com/Sidsuresh/Large-Scale-Data-Processing-on-NYC-Taxi-Trips"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                Processed and analysed approximately 1B NYC taxi trip records
                using distributed Spark pipelines (Databricks), optimising
                ingestion, memory usage, and data validation at scale.
              </li>
              <li>
                Implemented large-scale data quality checks and schema
                unification, filtering unrealistic trips while preserving
                dataset integrity for downstream analytics.
              </li>
              <li>
                Built Spark SQL analytics and regression models on aggregated
                features to predict trip revenue, evaluating performance using
                RMSE-based benchmarks.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">PySpark</span>
            <span className="tech-badge">Databricks</span>
            <span className="tech-badge">SQL</span>
            <span className="tech-badge">Scikit-learn</span>
          </div>
        </div>
        <div className="project">
          <img src={plant_leaf} className="zoom" alt="thumbnail" width="100%" />
          <a
            href="https://github.com/Sidsuresh/PlantDoctor"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Plant Doctor: Plant Leaf Disease Detection System</h2>
          </a>
          <div className="project-actions">
            <a
              href="https://github.com/Sidsuresh/PlantDoctor"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">💻 GitHub</button>
            </a>
          </div>
          <p>
            <ul>
              <li>
                A website that provides users with 98.3% accuracy in identifying
                diseases from images of plant leaves using a CNN model trained
                using the augmented PlantVillage dataset.
              </li>
            </ul>
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">TensorFlow 2.0</span>
            <span className="tech-badge">CNN</span>
            <span className="tech-badge">Computer Vision</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
