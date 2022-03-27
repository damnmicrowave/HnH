import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/topics.dart';

import '../services/api.dart';

class TopicsCubit extends Cubit<TopicsModel?> {
  TopicsCubit() : super(null);

  loadTopics() async {
    TopicsModel? topics = await api.loadTopics();
    emit(topics);
  }
}
