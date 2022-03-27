import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/articles.dart';

import '../services/api.dart';

class ArticlesCubit extends Cubit<ArticlesModel?> {
  ArticlesCubit() : super(null);

  loadArticles() async {

    final ArticlesModel? articles = await api.loadArticles();
    emit(articles);
  }
}
