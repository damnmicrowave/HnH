import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/article.dart';

class ArticlesCubit extends Cubit<ArticlesModel?> {
  ArticlesCubit() : super(null);

  loadArticles() async {
    final ArticlesModel article = ArticlesModel.fromJson(const {
      "objects": [
        {
          "id": "36473647364464",
          "name": "Article about a",
          "datetime": 27032022,
          "author": {
            "id": "36474736373464",
            "username": "xenikii",
          },
          "content": "How Does Stress Affect"
              " Health?The human body is designed "
              "to experience stress and react to it."
              " Stress can be positive -- such as a getting "
              "a job promotion or being given greater responsibilities "
              "-- keeping us alert and ready to avoid danger. "
              "Stress becomes negative  when a person faces continuous "
              "challenges without relief or relaxation between challenges. "
              "As a result, the person becomes overworked and stress-related"
              " tension builds.Distress can lead to physical symptoms including "
              "headaches, upset stomach, elevated blood pressure, chest pain, "
              "and problems sleeping. Research suggests that stress also can bring "
              "on or worsen certain symptoms or diseases."
        }
      ]
    });
    emit(article);
  }
}
