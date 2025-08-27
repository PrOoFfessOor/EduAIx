import styles from './App.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About LearnMate AI</h1>
      <p className={styles.paragraph}>
        LearnMate AI is your personal AI-powered tutor for students from <strong>Class 6 to Class 12</strong>.
        It simplifies complex concepts using <strong>natural voice interaction, visual explanations</strong>, 
        and <strong>multi-language support</strong>. Our mission is to make education accessible, engaging, and effective.
      </p>

      <h2 className={styles.subheading}>✨ Key Features</h2>
      <ul className={styles.list}>
        <li>🧠 Instant answers to academic questions (NCERT syllabus)</li>
        <li>🎤 Voice chat in Hinglish, Hindi, English, and Bengali</li>
        <li>📚 Covers Math, Science, History, Civics, and more</li>
        <li>📊 Uses diagrams and visuals to aid understanding</li>
        <li>🔄 Always available, anytime you need help</li>
      </ul>

      <h2 className={styles.subheading}>🎯 Our Mission</h2>
      <p className={styles.paragraph}>
        To empower every student with a personal AI tutor that helps them understand and love learning—regardless of their background or resources.
      </p>

      <h2 className={styles.subheading}>🔧 Technology Behind the App</h2>
      <p className={styles.paragraph}>
        Built using React, Node.js, Gemini API for AI and Express.js for backend
      </p>

      <h2 className={styles.subheading}>🚀 What's Next?</h2>
      <p className={styles.paragraph}>
        We plan to add daily practice questions, progress tracking, and exam-specific tools to make LearnMate AI your complete learning companion.
      </p>
    </div>
  );
};

export default About;