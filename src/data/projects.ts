import { Project } from '../components/ui/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'Data Analysis on Airline dataset',
    description: 'This project utilizes exploratory data analysis (EDA) to extract insights from a dataset containing attributes such as Airline, Date of Journey, Source, Destination, Route, Duration, Stops, and Price.',
    // image: 'https://chatgpt.com/s/m_6834ae2ca9ac8191a45fc17191477f64',
    image: "/assets/airline_dataset.png",
    technologies: ['Python', 'Pandas', 'Numpy', 'matplot.lib', 'Seaborn', 'Scikit-learn'],
    github: 'https://github.com/Neeleshsingh30/Data_Analysis_on_Airline_dataset.git',
    demo: 'https://Airline- analysis.demo.com',
    details: 'The Airline Data Analysis Project provides valuable insights by exploring a detailed dataset containing attributes such as Airline, Date of Journey, Source, Destination, Route, Departure Time, Arrival Time, Duration, Total Stops, Additional Info, and Price. This project focuses on uncovering critical patterns and relationships within the data to support data-driven decision-making in the aviation industry.'
  },
  {
    id: 2,
    title: 'Age Gender recognition using deep learning',
    description: 'This project uses convolutional neural networks (CNNs) to predict age and gender from facial images, leveraging labeled datasets for accurate and practical real-world applications.',
    image: 'https://i.ytimg.com/vi/vEJzsGXrB70/sddefault.jpg',
    technologies: ['Python', 'OpenCV', 'Keras', 'Numpy', 'tensorflow', 'matplotlib','Scikit-learn','Pandas','h5py','tqdm'],
    github: 'https://github.com/Neeleshsingh30/Age_Gender_Recognition.git',
    demo: 'https://Age-Gender-recognition.demo.com',
    details: 'This project uses deep learning, specifically convolutional neural networks (CNNs), to predict a person’s age and gender from facial images. By training on labeled face datasets, the model learns to analyze facial features and deliver accurate predictions, making it useful for applications like security, marketing, and personalized user experiences.'
  },
  {
    id: 3,
    title: 'Activity recognition',
    description: 'Training Machine to Recognition the Activity humans are doing through the Video input',
    image: '/assets/Activity-cover.png',
    technologies: ['Tensorflow', 'Tensorflow_hub', 'Cv2', 'Numpy ', 'tqdm', 'matplotlib'],
    github: 'https://github.com/Neeleshsingh30/Activity_Recognition.git',
    details: 'The Human Activity Recognition using Computer Vision project leverages advanced computer vision techniques to analyze and identify activities performed by humans. Using video or image data, the model processes visual input to recognize and classify actions, making it applicable in fields like surveillance, healthcare, and sports analytics.'
  },
  {
    id: 4,
    title: 'Google play Store Data Analysis',
    description: 'The objective of this project is to analyze the Google Play Store apps dataset and customer reviews to uncover insights into factors like category, rating, size, and user feedback that influence app engagement and success.',
    image: '/assets/Google-play.png',
    technologies: ['Python', 'numpy', 'matplotlib', 'seaborn', 'pandas', 'timedate'],
    github: 'https://github.com/Neeleshsingh30/Google_play_Score_Data_Analysis.git',
    demo: 'https://google-play-store-analysis.demo.com',
    details: 'This project focuses on analyzing the Google Play Store apps dataset and user reviews to uncover factors influencing app engagement and success. By leveraging libraries like Pandas, NumPy, Matplotlib, and Seaborn, the data is cleaned and visualized to explore relationships among attributes such as app category, type (free or paid), user ratings, and installations. The analysis aims to provide insights into user preferences and trends, helping developers better understand customer demands and make informed decisions to improve app performance in a competitive market.'
  },
   {
    id: 5,
    title: 'HR Analytics Dashboard Using  Power BI',
    description: 'An HR Analytics Dashboard in Power BI visualizes key metrics like employee performance, attrition, recruitment efficiency, demographics, and engagement. It provides interactive insights to help HR teams monitor trends, optimize processes, and make data-driven decisions.',
    image: '/assets/HR-analytics.png',
    technologies: ['Power BI'],
    github: 'https://github.com/Neeleshsingh30/HR_Analytics_Dashboard_using_power_BI.git',
    demo: 'https://HR-analytics-analysis.demo.com',
    details: 'The HR Analytics Dashboard project focuses on analyzing and visualizing key workforce metrics to support data-driven HR decision-making. Using tools like Power BI, it presents insights into employee attrition, demographics, job roles, and education through interactive charts and KPIs. The dashboard helps HR teams identify trends, such as attrition patterns by age or department, and provides actionable insights to improve retention, optimize recruitment, and enhance workforce management.It serves as a comprehensive tool to align HR strategies with organizational goals effectively.'
  },
   {
    id: 6,
    title: "Ecommerce Sales Dashboard Using Power BI",
    description: "A Power BI dashboard visualizing sales, profit, customer trends, and product performance to drive data-informed e-commerce strategies.",
    image: "/assets/Ecommerse-sales.png",
    technologies: ["Power BI"],
    github: "https://github.com/Neeleshsingh30/Ecommerce_Sales_Dashboard_using_Power_BI.git",
    demo: "https://ecommerce-sales-dashboard.demo.com",
    details: "This dashboard provides in-depth insights into sales performance, customer preferences, and profitability. Key metrics include revenue (₹438K), profit (₹37K), and top-performing categories like Clothing (63% of sales). Maharashtra leads in revenue generation, while Cash on Delivery is the preferred payment mode (44%). High-profit items such as Printers and Bookcases are highlighted, and December's sales peak suggests leveraging seasonal trends for improved engagement and profitability."},
];
export default projects;