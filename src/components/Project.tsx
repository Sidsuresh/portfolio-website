import React from "react";
import img_cap from "../assets/images/img_cap.png";
import brain_tum from "../assets/images/brain_tum.png";
import sent_analysis from "../assets/images/sent_analysis.png";
import plant_leaf from "../assets/images/plant_leaf.png";
import loan_risk_pred from "../assets/images/loan_risk_pred.png";
import voice_exp_controller from "../assets/images/voice_exp_controller.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/Image_Captioning_System"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img_cap} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Sidsuresh/Image_Captioning_System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Image Captioning Model using Transformer Architecture</h2>
          </a>
          <p>
            <ul>
              <li>
                Built an image captioning system, trained and evaluated on the
                Flickr8k dataset, combining a ResNet-50 CNN encoder with a
                Transformer decoder to generate descriptive captions from
                images.
              </li>
              <li>
                Achieved BLEU scores of 0.5955 (BLEU-1), 0.3869 (BLEU-2), 0.2566
                (BLEU-3), and 0.1700 (BLEU-4), indi- cating strong alignment
                between generated and reference captions
              </li>
            </ul>
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/Brain-Tumor-Detection-Vision-Transformers"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={brain_tum}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Sidsuresh/Brain-Tumor-Detection-Vision-Transformers"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Brain Tumor Detection using Vision Transformers</h2>
          </a>
          <p>
            <ul>
              <li>
                Built a brain tumour classification system using Vision
                Transformer (ViT) and benchmarked it against tra- ditional CNN
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
        </div>
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/RoBERTaBasedSentimentAnalysis"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={sent_analysis}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
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
        </div>
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/PlantDoctor"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={plant_leaf}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Sidsuresh/PlantDoctor"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Plant Doctor: Plant Leaf Disease Detection System</h2>
          </a>
          <p>
            <ul>
              <li>
                A website that provides users with 98.3% accuracy in identifying
                diseases from images of plant leaves using a CNN model trained
                using the augmented PlantVillage dataset.
              </li>
            </ul>
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/Loan_Risk_Prediction"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={loan_risk_pred}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
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
        </div>
        <div className="project">
          <a
            href="https://github.com/Sidsuresh/Expense-Tracker"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={voice_exp_controller}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Sidsuresh/Expense-Tracker"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Voice-Enabled Personal Finance Management System</h2>
          </a>
          <p>
            <ul>
              <li>
                Expense tracker with category-based expenditure logging and
                detailed statistics.
              </li>
              <li>
                Integrated with ALAN AI voice assistant for hands-free page
                navigation and data input.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
