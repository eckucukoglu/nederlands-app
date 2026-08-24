import React from 'react';
import { onClassContent } from '../data';
import ExerciseEngine from './ExerciseEngine';

export default function OnClass() {
  return (
    <div>
      <div className="card">
        <h2>{onClassContent.title}</h2>
        
        {onClassContent.grammar.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3 style={{ color: 'var(--primary-color)' }}>{item.topic}</h3>
            <p>{item.explanation}</p>
            {item.examples && (
              <ul>
                {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            )}
          </div>
        ))}
        
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px', borderRadius: '8px' }}>
          <h4>Belangrijke Woorden (Önemli Kelimeler) uit On-Class</h4>
          <p>hoofd (head), gezicht (face), neus (nose), keel (throat), buik (belly), rug (back), arm (arm), been (leg)</p>
        </div>
      </div>

      {/* On-class bölümü için 20+ soruluk egzersiz alanı */}
      <ExerciseEngine 
        sectionData={{ 
          title: "On-Class Oefeningen (20 Soruluk Test)", 
          content: "Test je kennis van de on-class presentatie.", 
          exercises: onClassContent.exercises 
        }} 
      />
    </div>
  );
}